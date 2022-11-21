import React, { Component } from 'react';
import "../custom.css";

export class ExploreUfo extends Component {
    static displayName = ExploreUfo.name;

    render() {
        return (
            <div>
                <h1>UFO tittel</h1>
                <p>Denne siden er work in progress, trenger fetching fra databasen</p>

                <iframe
                    className='map'
                    width='600' 
                    height='400'
                    style={{border: 'none'}}
                    loading='lazy'
                    allowFullScreen 
                    referrerPolicy = 'no - referrer - when - downgrade'
                    src = {'https://www.google.com/maps/embed/v1/place?key=AIzaSyAh3r_xSPcltV8W1V6I6IGmuJQsyaDREnU&q='+'Oslo'}
                 ></iframe >
            </div>
        );
    }
}