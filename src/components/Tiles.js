import React from 'react';
import Tile from './Tile';

export default (props) => {
  const tiles = props.tiles.map((value, index) => (
    <Tile
      disabled={props.status.winner || value}
      key={index}
      value={value}
      onClick={() => props.onClick(index)}
    />
  ));
  return <div className="tiles">{tiles}</div>;
};
