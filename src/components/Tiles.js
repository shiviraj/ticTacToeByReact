import React from 'react';
import Tile from './Tile';

class Tiles extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const num = +e.target.innerText;
    this.props.onClick(num);
  }

  className(num) {
    let name = '';
    if (this.props.player1.includes(num)) name = 'player1';
    if (this.props.player2.includes(num)) name = 'player2';
    return name;
  }

  isDisabled(num) {
    return this.props.player2.concat(this.props.player1).includes(num);
  }

  render() {
    const tiles = Array.from(new Array(9).keys()).map((num) => {
      return (
        <Tile
          disabled={this.props.isWon || this.isDisabled(num + 1)}
          key={num}
          num={num + 1}
          onClick={this.handleClick}
          className={this.className(num + 1)}
        />
      );
    });

    return <div className="tiles">{tiles}</div>;
  }
}

export default Tiles;
