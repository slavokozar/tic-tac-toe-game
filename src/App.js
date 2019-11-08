import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            grid:   [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ],
            player: 1
        }
    }

    handleClick() {
        console.log( 'click' );

    }

    render() {
        return (
            <>
                <h1>Player {this.state.player} is playing</h1>
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
                                                     console.log( 'clicked', i, j );

                                                     let grid = this.state.grid;

                                                     // if(grid[ i ][ j ]) return;
                                                     if(grid[ i ][ j ] !== null) return;

                                                     grid[ i ][ j ] = this.state.player === 1 ? 'X' : 'O';

                                                     // if(this.state.player === 1){
                                                     //     this.setState({player:2})
                                                     // }else{
                                                     //     this.setState({player:1})
                                                     // }

                                                     this.setState( {
                                                         grid: grid,
                                                         player: 3 - this.state.player
                                                     } );

                                                 }}

                                            >{symbol}</div>
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