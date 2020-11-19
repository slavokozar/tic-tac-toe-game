import React, {useState} from 'react';
import './App.css';

export default function App() {
    const [grid, setGrid] = useState( [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ] );

    const [player, setPlayer] = useState( 1 );

    const handleClick = (e) => {

        console.log(e.target.dataset.x, e.target.dataset.y);

    }



    return (
        <div className="container">

            <div className="grid">
                {
                    grid.map( ( row, i ) => (
                        <div key={i} className="row">
                            {
                                row.map( ( cell, j ) => (

                                    <div key={j} className="cell"
                                         data-x={i}
                                         data-y={j}
                                         onClick={() => {
                                             // because of arrow function we can use the variables i and j
                                             // those variables came from two map methods our code is wrapped into
                                             console.log( 'clicked', i, j );

                                             if ( grid[ i ][ j ] !== '' ) return;

                                             // create a copy of state variables we can modify
                                             // remember we can't modify state directly!

                                             let newGrid = grid;

                                             if ( player === 1 ) {
                                                 // put the symbol x on coordinates [i, j] into the grid
                                                 newGrid[ i ][ j ] = 'x';
                                                 setGrid(newGrid);

                                                 // change player to player 2
                                                 setPlayer(2);

                                             } else {
                                                 newGrid[ i ][ j ] = 'o';

                                                 setGrid(newGrid);

                                                 setPlayer(1);
                                             }

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