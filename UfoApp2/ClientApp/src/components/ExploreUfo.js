import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../custom.css";

export const ExploreUfo = () => {
  const [observasjon, setObservasjon] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  window.scrollTo(0, 0);

  useEffect(() => {
    const ac = new AbortController();
    async function fetchData() {
      const response = await fetch("ufo/hentEn?id=" + params.id);
      const data = await response.json();
      setObservasjon(data);
      setLoading(false);
    }
    fetchData();
    ac.abort();
  }, [observasjon]);

  if (loading) {
    return (
      <p>
        <em>Loading ...</em>
      </p>
    );
  } else {
    return (
      <div>
        <h1>{observasjon.tittel}</h1>
        <p>Dato: {observasjon.dato}</p>
        <p>Sted: {observasjon.sted}</p>
        <p>Beskrivelse: {observasjon.beskrivelse}</p>
        <iframe
          className="map"
          width="600"
          height="400"
          style={{ border: "none" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no - referrer - when - downgrade"
          src={
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyAh3r_xSPcltV8W1V6I6IGmuJQsyaDREnU&q=" +
            observasjon.sted
          }
        ></iframe>
      </div>
    );
  }
};
