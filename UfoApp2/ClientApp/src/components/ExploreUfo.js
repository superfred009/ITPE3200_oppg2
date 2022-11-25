import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../custom.css";

export class ExploreUfo extends Component {
  static displayName = ExploreUfo.name;

  constructor(props) {
    super(props);
    this.state = { observasjon: [], loading: true };
  }

  componentDidMount() {
    this.populateUfoData();
  }

  static renderExplored(observasjon) {
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
        <Container>
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
    );
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading ...</em>
      </p>
    ) : (
      ExploreUfo.renderExplored(this.state.observasjon)
    );

    return <div>{contents}</div>;
  }

  async populateUfoData() {
    const response = await fetch("ufo/hentEn?id=" + this.props.match.params.id);
    console.log("response: ", response);
    const data = await response.json();
    console.log("data: ", data);
    this.setState({ observasjon: data, loading: false });
  }
}
