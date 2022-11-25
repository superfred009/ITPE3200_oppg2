import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ExploreUfo } from './components/ExploreUfo';

import './custom.css'
import { FetchUfoData } from './components/FetchUfoData';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/fetch-ufo-data' component={FetchUfoData} />
        <Route
          exact
          path="/explore-ufo/:id"
          component={ExploreUfo}
        />
      </Layout>
    );
  }
}
