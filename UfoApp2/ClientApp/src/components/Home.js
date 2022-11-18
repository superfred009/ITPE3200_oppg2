import React, { Component } from 'react';
import { FetchUfoData } from './FetchUfoData';
import { UfoForm } from './UfoForm';
import { Innloggingsskjema } from './Innloggingsskjema';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
         <h1>UFO observasjoner</h1>
            <FetchUfoData />
            <Innloggingsskjema />
      </div>
    );
  }
}