import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { ExploreUfo } from "./components/ExploreUfo";

import "./custom.css";
import { FetchUfoData } from "./components/FetchUfoData";
import { Innlogging } from "./components/Innlogging";
import { UfoForm } from "./components/UfoForm";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
<<<<<<< HEAD
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/fetch-ufo-data' component={FetchUfoData} />
            
=======
        <Route exact path="/" component={Home} />
        <Route path="/fetch-ufo-data" component={FetchUfoData} />
        <Route exact path="/explore-ufo/:id" component={ExploreUfo} />
        <Route path="/logg-inn" component={Innlogging} />
        <Route path="/ufo-form" component={UfoForm} />
>>>>>>> main
      </Layout>
    );
  }
}
