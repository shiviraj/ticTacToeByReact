import React from 'react';

export default ({ status, currentPlayer }) => {
  let gameStatus = `${currentPlayer.name}'s Turn`;
  status.isDraw && (gameStatus = `Game Draw!!!`);
  status.winner && (gameStatus = `${status.winner.name} won!!!`);
  return <h1>{gameStatus}</h1>;
};
