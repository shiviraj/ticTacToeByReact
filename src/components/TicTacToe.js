import React from 'react';
import Status from './Status';
import Tiles from './Tiles';
import winingCombinations from './winningCombinations';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: [],
      player2: [],
      status: 'Current Turn: Player 1',
      isWon: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  get turnPlayed() {
    return this.state.player1.concat(this.state.player2).length;
  }

  get currentTurn() {
    return this.turnPlayed % 2 ? 'player2' : 'player1';
  }

  isWon(currentTurn) {
    return winingCombinations.some((row) => {
      return row.every((num) => this.state[currentTurn].includes(num));
    });
  }

  gameResult(currentTurn) {
    if (this.isWon(currentTurn)) {
      const status = currentTurn === 'player1' ? 'Player 1' : 'Player 2';
      this.setState({ status: status + ' has Won!!!', isWon: true });
    }

    this.turnPlayed === 9 && this.setState({ status: 'Game Draw!!!' });
  }

  handleClick(num) {
    const currentTurn = this.currentTurn;
    this.state[currentTurn].push(num);

    const nextPlayer = currentTurn === 'player1' ? 'Player 2' : 'Player 1';

    this.setState({
      player1: this.state.player1,
      player2: this.state.player2,
      status: `Current Turn: ${nextPlayer}`,
    });

    this.gameResult(currentTurn);
  }

  render() {
    return (
      <div className="container">
        <Status status={this.state.status} />
        <Tiles
          player1={this.state.player1}
          player2={this.state.player2}
          onClick={this.handleClick}
          isWon={this.state.isWon}
        />
      </div>
    );
  }
}

export default TicTacToe;
