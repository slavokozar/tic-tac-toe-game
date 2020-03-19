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

                                <div key={i} style={{display: 'flex', flexDirection: 'row'}}>
                                    {
                                        row.map( ( cell, j ) => (

                                            <div key={j}
                                                 style={{
                                                     width:      '10vw',
                                                     height:     '10vw',
                                                     fontSize:   '3rem',
                                                     margin:     '3px',
                                                     background: '#fff'
                                                 }}

                                                //onClick={this.handleClick}

                                                 onClick={() => {
                                                     let newGrid = this.state.grid;
                                                     let newPlayer = this.state.player;

                                                     if ( this.state.player === 1 ) {
                                                         newGrid[ i ][ j ] = 'x';
                                                         newPlayer = 2;
                                                     } else {
                                                         newGrid[ i ][ j ] = 'o';
                                                         newPlayer = 1;
                                                     }

                                                     this.setState( {
                                                         grid: newGrid,
                                                         player: newPlayer
                                                     } );
                                                 }}
                                            >
                                                {cell}
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