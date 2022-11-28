import React from "react";
import { Container } from "reactstrap";
import { FetchUfoData } from "./FetchUfoData";

export const Home = () => {
  return (
    <div>
      <Container className="home-wrapper">
        <h1>UFO observasjoner</h1>
        <p>
          Her kan du se alle UFO observasjonene. Har du observert en ufo nylig
          kan du legge til en ny observasjon <a href="/ufo-form">her.</a>
        </p>
      </Container>
      <FetchUfoData />
    </div>
  );
};
