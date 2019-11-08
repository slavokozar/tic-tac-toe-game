import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            grid: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ]
        }
    }

    render() {
        return (
            <div style={{width: '100vw', height: '100vh', display: 'flex', background: '#aaa'}}>
                <div style={{width: '60vw', height: '40vw', margin: 'auto'}}>
                    {
                        this.state.grid.map( ( row ) => (
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                {
                                    row.map( ( symbol ) => (
                                        <div style={{
                                            width:      '10vw',
                                            height:     '10vw',
                                            fontSize:   '3rem',
                                            margin:     '3px',
                                            background: '#fff'
                                        }}>{ symbol }</div>
                                    ) )
                                }
                            </div>
                        ) )
                    }
                </div>
            </div>
        )
    }

}