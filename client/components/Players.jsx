import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Players = () => {
  const players = useSelector((state) => state.players);
  const turn = useSelector((state) => state.turn.turn);
  const socket = useSelector((state) => state.socket);

  const isTurn = (playerId) => turn && turn === playerId;

  const currentPlayerIndicator = (playerId) => {
    if (socket && socket.id === playerId) {
      return (<small>(You)</small>);
    }
  };

  if (!players) return null;
  return (
    <Card>
      <div className="card-header">Players</div>
      <ListGroup variant="flush">
        {
          Object.keys(players).map((playerId) => (
            <ListGroup.Item key={playerId} variant={isTurn(playerId) ? 'success' : ''}>
              <span className={`color-${players[playerId].color} pr-1`}>
                { players[playerId].name }
              </span>
              { currentPlayerIndicator(playerId) }
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Card>
  );
};

export default Players;
