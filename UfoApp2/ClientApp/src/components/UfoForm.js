import React, { Component } from "react";

export class UfoForm extends Component {
    static displayName = UfoForm.name;

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="tittel">Tittel</label>
                    <input type="text" className="form-control" id="tittel" placeholder="Tittel" />
                </div>
                <div className="form-group">
                    <label htmlFor="sted">Sted</label>
                    <input type="text" className="form-control" id="sted" placeholder="Sted" />
                </div>
                <div className="form-group">
                    <label htmlFor="dato">Dato</label>
                    <input type="date" className="form-control" id="dato" placeholder="Dato" />
                </div>
                <div className="form-group">
                    <label htmlFor="beskrivelse">Beskrivelse</label>
                    <textarea className="form-control" id="beskrivelse" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}