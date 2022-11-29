import React, { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../custom.css";
import { slettEn, hentAdminData } from "./utils";

export const LoggedInHome = () => {
  const [observasjoner, setObservasjoner] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    hentAdminData(setObservasjoner, setLoading);
  }, [observasjoner]);

  if (loading) {
    return (
      <p>
        <em>Loading ...</em>
      </p>
    );
  } else {
    return (
      <>
        <Container className="admin-wrapper">
          <h1>UFO Administrator</h1>
          <p>Her kan du endre og slette de registrerte observasjonene</p>
          <Button onClick={() => {
            fetch("ufo/loggut").then(window.location.href = "/");
          }} className="btn btn-primary">
            Logg ut
          </Button>
        </Container>
        <div className="row">
          {observasjoner.map((observasjon) => (
            <div key={observasjon.id} className="card col-6">
              <div className="card-body">
                <h5 className="card-title">{observasjon.tittel}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {observasjon.sted}
                </h6>
                <p className="card-text">{observasjon.dato}</p>
                <p className="card-text">{observasjon.beskrivelse}</p>
                <Container className="edit-container">
                  <Link
                    className="btn btn-primary"
                    to={{
                      pathname: `/rediger-ufo/${observasjon.id}`,
                      state: { observasjon: observasjon },
                    }}
                  >
                    Rediger
                  </Link>
                  <Button
                    className="btn-danger"
                    onClick={() => slettEn(observasjon.id)}
                  >
                    Slett
                  </Button>
                </Container>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};
