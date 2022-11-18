import React, { Component } from 'react';
import "../custom.css";

export class ExploreUfo extends Component ({observasjon}) {
    static displayName = ExploreUfo.name;

    constructor(props) {
        super(props);
        this.state = { observasjon, loading: true };
        
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading ...</em></p>
            : ExploreUfo.renderObservasjonerTable(this.state.observasjoner);

        return (
            <div>
                {contents}
            </div>
        )
    }
}