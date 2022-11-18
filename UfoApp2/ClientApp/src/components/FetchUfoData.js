import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../custom.css";

export class FetchUfoData extends Component {
    static displayName = FetchUfoData.name;

    constructor(props) {
        super(props);
        this.state = { observasjoner: [], loading: true };

    }

    componentDidMount() {
        this.populateUfoData();
    }

    static renderObservasjonerTable(observasjoner) {
        return (
            <div className="row">
                 {observasjoner.map(observasjon =>
                     <div key={observasjon.id} className="card col-6">
                     <div className="card-body">
                     <Link
                        to={{
                            pathname: `/explore-ufo/${observasjon.id}`,
                            state: { observasjoner: observasjon }
                        }}
                        >
                            <h5 className="card-title"><a>{observasjon.tittel}</a></h5>
                        </Link>
                         <h6 className="card-subtitle mb-2 text-muted">{observasjon.sted}</h6>
                         <p className="card-text">{observasjon.dato}</p>
                         <p className="card-text">{observasjon.beskrivelse}</p>
                     </div>
                 </div>
                )}
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading ...</em></p>
            : FetchUfoData.renderObservasjonerTable(this.state.observasjoner);

        return (
            <div>
                {contents}
            </div>
        )
    }

    async populateUfoData() {
        const response = await fetch('ufo/hentAlle');
        const data = await response.json();
        this.setState({ observasjoner: data, loading: false });
    }
}