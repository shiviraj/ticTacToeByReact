import React from 'react';
import Status from './Status';
import Tiles from './Tiles';
import WIN_CONDITIONS from './winningCombinations';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: { name: 'Player 1', symbol: 'X' },
      nextPlayer: { name: 'Player 2', symbol: 'O' },
      tiles: new Array(9).fill(''),
      isDraw: false,
      winner: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  findWinner(tiles) {
    const { currentPlayer } = this.state;
    const doesInclude = (index) => tiles[index] === currentPlayer.symbol;
    const isWin = WIN_CONDITIONS.some((row) => row.every(doesInclude));
    return isWin ? currentPlayer : null;
  }

  handleClick(num) {
    const newTiles = this.state.tiles;
    newTiles[num] = this.state.currentPlayer.symbol;

    this.setState(({ currentPlayer, nextPlayer }) => ({
      tiles: newTiles,
      currentPlayer: nextPlayer,
      nextPlayer: currentPlayer,
      isDraw: newTiles.every((t) => t),
      winner: this.findWinner(newTiles),
    }));
  }

  render() {
    const { isDraw, winner, currentPlayer } = this.state;
    const status = { isDraw, winner };
    return (
      <div className="container">
        <Status status={status} currentPlayer={currentPlayer} />
        <Tiles
          tiles={this.state.tiles}
          status={status}
          currentPlayer={currentPlayer}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default TicTacToe;
