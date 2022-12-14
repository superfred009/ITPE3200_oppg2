import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { ExploreUfo } from "./components/ExploreUfo";

import "./custom.css";
import { FetchUfoData } from "./components/FetchUfoData";
import { Innlogging } from "./components/Innlogging";
import { UfoForm } from "./components/UfoForm";
import { EditUfoForm } from "./components/EditUfoForm";
import { LoggedInHome } from "./components/LoggedInHome";

const App = () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/fetch-ufo-data" component={FetchUfoData} />
      <Route exact path="/explore-ufo/:id" component={ExploreUfo} />
      <Route path="/logg-inn" component={Innlogging} />
      <Route path="/ufo-form" component={UfoForm} />
      <Route exact path="/rediger-ufo/:id" component={EditUfoForm} />
      <Route path="/admin" component={LoggedInHome} />
    </Layout>
  );
};

export default App;
