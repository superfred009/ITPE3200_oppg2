import React, { Component } from "react";
import { FetchUfoData } from "./FetchUfoData";
import { Innlogging } from "./Innlogging";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>UFO observasjoner</h1>
            <FetchUfoData />
      </div>
    );
  }
}
