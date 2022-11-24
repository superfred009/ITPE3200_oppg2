import React, { Component } from 'react';
import validerBrukernavn from './validering';
import validerPassord from './validering';

export class Innlogging extends Component {
    render() {
        return (

            <>
                <title> UFO Register </title>
                <meta httpEquiv="Content Type" content="text/html; charset=UTF-8" />
                <div className="container">
                    <h1>Logg inn</h1>
                    <form className="form">
                        <div className="form-group">
                            <label>Brukernavn</label>
                            <input
                                type="text"
                                id="brukernavn"
                                onchange={validerBrukernavn(this.value)}
                            />
                            <span id="feilBrukernavn" style={{ color: "red" }} />
                        </div>
                        <div className="form-group">
                            <label>Passord</label>
                            <input
                                type="password"
                                id="passord"
                                onchange={validerPassord(this.value)}
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
function loggInn() {
    const brukernavnOK = validerBrukernavn(${this.props.brukernavn.value()});
    const passordOK = validerPassord(${this.props.passord.value()});

    if (brukernavnOK && passordOK) {
        const bruker = {
            brukernavn: ${props.brukernavn}.value(),
            passord: ${props.passord}.value()
        }
        $.post("Admin/Innlogging", bruker, function (OK) {
            if (OK) {
                window.location.href = 'Home.js';
            }
            else {
                <div>Feil brukernavn eller passord!</div>
            }
        })
        .fail(function () {
            <div>Feil på server - prøv igjen senere.</div>
        })
    }

}


