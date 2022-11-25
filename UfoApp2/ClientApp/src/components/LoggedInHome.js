import React, { Component } from "react";
import { FetchUfoData } from "./FetchUfoData";
import { Innlogging } from "./Innlogging";

export class LoggedInHome extends Component {
    static displayName = LoggedInHome.name;
   /*
    function islogged(nextState, replace, next) {
        if (!isLoggedIn) {
            replace({
                pathname: "/FetchUfoData",
            });
        }
        next();
    }*/
    
    render() {
        return (
            <FetchUfoData />
        );
    }
}