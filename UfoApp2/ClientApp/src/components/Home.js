import React, { Component } from 'react';
import { FetchUfoData } from './FetchUfoData';
import { UfoForm } from './UfoForm';
import './custom.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div className="tester">
         <h1>UFO observasjoner</h1>
            <FetchUfoData />
      </div>
    );
  }
}