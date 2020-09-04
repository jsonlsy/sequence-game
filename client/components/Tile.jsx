import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { selectCard } from '../redux/modules/hand';
import { isWildcard, isRemove } from '../helpers/cards';

const Tile = ({ cardCode, color, rowIndex, colIndex }) => {
  const selectedCardCode = useSelector((state) => state.hand.selected);
  const socket = useSelector((state) => state.socket);
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const currentColor = players[socket.id] ? players[socket.id].color : null;

  const isSelected = cardCode
    && ((selectedCardCode && (cardCode === selectedCardCode) && !color)
        || (isWildcard(selectedCardCode) && !color)
        || (isRemove(selectedCardCode) && color && color !== currentColor));

  const play = () => {
    if (!isSelected) return;
    socket.emit('play', { cardCode: selectedCardCode, rowIndex, colIndex });
    dispatch(selectCard(null));
  };

  const attrClass = isSelected ? 'selected cursor-pointer' : '';

  return (
    <div className="board-card-container">
      <div
        className={`playing-card small ${attrClass}`}
        onClick={play}
        style={{ backgroundImage: `url(/assets/cards/${cardCode}.svg)` }}
      >
        <Row className="h-100 align-items-center justify-content-center">
          <Col sm="auto">
            { color && <div className={`token ${color}`} /> }
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Tile;
