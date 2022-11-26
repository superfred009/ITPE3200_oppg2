import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../custom.css";

export const FetchUfoData = () => {
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
      <div className="row">
        {observasjoner.map((observasjon) => (
          <div key={observasjon.id} className="card col-6">
            <Link
              to={{
                pathname: `/explore-ufo/${observasjon.id}`,
                state: { observasjoner: observasjon },
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{observasjon.tittel}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {observasjon.sted}
                </h6>
                <p className="card-text">{observasjon.dato}</p>
                <p className="card-text">{observasjon.beskrivelse}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
};
