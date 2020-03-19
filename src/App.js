import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            grid:   [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
            ],
            player: 1
        }
    }

    render() {
        return (
            <>
                <div style={{width: '100vw', height: '100vh', display: 'flex', background: '#aaa'}}>
                    <div style={{width: '60vw', height: '40vw', margin: 'auto'}}>
                        {
                            this.state.grid.map( ( row, i ) => (
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    {
                                        row.map( ( symbol, j ) => (
                                            <div style={{
                                                width:      '10vw',
                                                height:     '10vw',
                                                fontSize:   '3rem',
                                                margin:     '3px',
                                                background: '#fff'
                                            }}>
                                                {symbol}
                                            </div>
                                        ) )
                                    }
                                </div>
                            ) )
                        }
                    </div>
                </div>
            </>
        )
    }

}