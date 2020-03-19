import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            grid:   [
                ['x', '', '', ''],
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

                                                 onClick={() => {

                                                     // because of arrow function we can use the variables i and j
                                                     // those variables came from two map methods our code is wrapped into
                                                     console.log('clicked', i, j);

                                                     // create a copy of state variables we can modify
                                                     // remember we can't modify state directly!

                                                     let newGrid = this.state.grid;
                                                     let newPlayer = this.state.player;

                                                     if ( this.state.player === 1 ) {
                                                         // put the symbol x on coordinates [i, j] into the grid
                                                         newGrid[ i ][ j ] = 'x';
                                                         // change player to player 2
                                                         newPlayer = 2;
                                                     } else {
                                                         newGrid[ i ][ j ] = 'o';
                                                         newPlayer = 1;
                                                     }

                                                     // store new values to state of component
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