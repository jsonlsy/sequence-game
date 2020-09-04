import React from 'react';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tile from './Tile';

const Board = () => {
  const board = useSelector((state) => state.board);
  const turnToPlay = useSelector((state) => state.turn.turnToPlay);
  const status = useSelector((state) => state.status);
  const winner = useSelector((state) => state.winner.winner);

  const renderTile = ({ cardCode, color }, rowIndex, colIndex) => (
    <Col key={`${rowIndex}-${colIndex}`} sm="auto">
      <Tile cardCode={cardCode} color={color} rowIndex={rowIndex} colIndex={colIndex} />
    </Col>
  );

  if (!board) return null;

  return (
    <div>
      <div className="board">
        <div className={turnToPlay && !status.paused && !winner ? '' : 'disabled-layer'} />
        {
          board.map((row, rowIndex) => (
            <Row noGutters key={`row-${rowIndex}`} className="justify-content-center">
              { row.map((tile, colIndex) => renderTile(tile, rowIndex, colIndex)) }
            </Row>
          ))
        }
      </div>
    </div>
  );
};

export default Board;
