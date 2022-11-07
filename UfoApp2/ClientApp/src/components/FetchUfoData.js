import React, { Component } from 'react';

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
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                    </tr>
                </thead>
                <tbody>
                    {observasjoner.map(observasjon =>
                        <tr key={observasjon.id}>
                            <td>{observasjon.tittel}</td>
                            <td>{observasjon.sted}</td>
                            <td>{observasjon.dato}</td>
                            <td>{observasjon.beskrivelse}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading ...</em></p>
            : FetchUfoData.renderObservasjonerTable(this.state.observasjoner);

        return (
            <div>
                <h1 id="tabelLabel">Ufo</h1>
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