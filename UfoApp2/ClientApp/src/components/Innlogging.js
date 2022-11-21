import React, { Component } from 'react';

export class Innlogging extends Component {
    render() {
        return (

            <>
                <title> UFO Register </title>
                <meta httpEquiv="Content Type" content="text/html; charset=UTF-8" />
                <link
                    rel="stylesheet"
                    href="http://stackpath.bootstrapcdn.com/bootstrap/2.3.1/css/bootstrap.min.css"
                />
                <div className="container">
                    <h1>Logg inn</h1>
                    <form className="form">
                        <div className="form-group">
                            <label>Brukernavn</label>
                            <input
                                type="text"
                                id="brukernavn"
                                onchange="validerBrukernavn(this.value)"
                            />
                            <span id="feilBrukernavn" style={{ color: "red" }} />
                        </div>
                        <div className="form-group">
                            <label>Passord</label>
                            <input
                                type="password"
                                id="passord"
                                onchange="validerPassord(this.value)"
                            />
                            <span id="feilPassord" style={{ color: "red" }} />
                        </div>
                        <div className="form-group">
                            <input
                                type="button"
                                defaultValue="Logg Inn"
                                onclick="loggInn()"
                                className="btn btn-primary"
                            />
                        </div>
                        <div id="feil" style={{ color: "red" }} />
                    </form>
                </div>
            </>
            )
    }
}


