<<<<<<< HEAD
import React, { Component } from 'react';
import { FetchUfoData } from './FetchUfoData';
import { UfoForm } from './UfoForm';
=======
import React, { Component } from "react";
import { FetchUfoData } from "./FetchUfoData";
import { Innlogging } from "./Innlogging";
>>>>>>> 5999460a0d10c356494e6d281399e90008aa8625

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>UFO observasjoner</h1>
            <FetchUfoData />
<<<<<<< HEAD
            <innloggingsskjema />
=======
            <Innlogging />
>>>>>>> 5999460a0d10c356494e6d281399e90008aa8625
      </div>
    );
  }
}
