import React, { Component } from 'react';

export class Test extends Component {
    static displayName = Test.name;

    render() {
        return (
            <div>
                <h1>Test test</h1>
                <h3>Hello there</h3>
            </div>
        );
    }
}