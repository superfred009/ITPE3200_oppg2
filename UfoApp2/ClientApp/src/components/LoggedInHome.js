import React from "react";
import { FetchUfoData } from "./FetchUfoData";

export const LoggedInHome = () => {
  /*
    function islogged(nextState, replace, next) {
        if (!isLoggedIn) {
            replace({
                pathname: "/FetchUfoData",
            });
        }
        next();
    }*/

  return <FetchUfoData />;
};
