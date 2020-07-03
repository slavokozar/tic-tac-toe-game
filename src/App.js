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

    evaluateGame = () => {
        console.log( 'evaluating' );

        for(let y = 0; y < this.state.grid; y++){
            for(let x = 0; x < this.state.grid[0]; x++){

                let i = 1;
                while ( x + i < this.state.grid[ 0 ].length && this.state.grid[ y ][ x ] === this.state.grid[ y ][ x + i ] ) {
                    i++;
                }

                console.log( i );
                if(i >= 3) alert(this.state.grid[ y ][ x ] + ' wins!')

                i = 1;
                while ( y + i < this.state.grid.length && this.state.grid[ y ][ x ] === this.state.grid[ y + i ][ x ] ) {
                    i++;
                }

                console.log( i );
                if(i >= 3) alert(this.state.grid[ y ][ x ] + ' wins!')

                i = 1;
                while ( y + i < this.state.grid.length && x + i < this.state.grid[ 0 ].length
                && this.state.grid[ y ][ x ] === this.state.grid[ y + i ][ x + i ] ) {
                    i++;
                }

                console.log( i );
                if(i >= 3) alert(this.state.grid[ y ][ x ] + ' wins!')


                i = 1;
                while ( y - i > 0 && x + i < this.state.grid[ 0 ].length
                && this.state.grid[ y ][ x ] === this.state.grid[ y - i ][ x + i ] ) {
                    i++;
                }

                console.log( i );
                if(i >= 3) alert(this.state.grid[ y ][ x ] + ' wins!')


            }
        }



    };

    render() {
        return (
            <div className="container">
                <div className="grid">
                    {
                        this.state.grid.map( ( row, i ) => (
                            <div key={i} className="row">
                                {
                                    row.map( ( cell, j ) => (

                                        <div key={j} className="cell"
                                             onClick={() => {

                                                 // because of arrow function we can use the variables i and j
                                                 // those variables came from two map methods our code is wrapped into
                                                 console.log( 'clicked', i, j );

                                                 if(this.state.grid[ i ][ j ] !== '') return;

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
                                                     grid:   newGrid,
                                                     player: newPlayer
                                                 } );

                                                 this.evaluateGame();
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
        )
    }

}