import React, { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import "../custom.css";

export const LoggedInHome = () => {
  const [observasjoner, setObservasjoner] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("ufo/hentAlle");
      const data = await response.json();
      setObservasjoner(data);
      setLoading(false);
    }
    fetchData();
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
          <Link to="/" className="btn btn-primary">
            Logg ut
          </Link>
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
                    onClick={() => {
                      fetch("ufo/slett?id=" + observasjon.id).then(
                        (window.location.href = "/")
                      );
                    }}
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
