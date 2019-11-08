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

    handleClick() {
        console.log( 'click' );

    }

    render() {
        return (
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
                                        }}
                                             onClick={() => {
                                                 console.log('clicked', i, j);

                                                 let grid = this.state.grid;
                                                 grid[i][j] = 'X';
                                                 this.setState({grid: grid});

                                             }}

                                        >{symbol}</div>
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