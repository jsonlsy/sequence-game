import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Dashboard = () => {
  const status = useSelector((state) => state.status);
  const socket = useSelector((state) => state.socket);
  const winner = useSelector((state) => state.winner.winner);
  const room = useSelector((state) => state.room);
  const players = useSelector((state) => state.players);

  if (!status || !socket) return null;

  const roomId = room.set ? room.room || socket.id : null;
  const shareLink = `${window.location.origin}?room=${roomId}`;

  let displayStatus;
  let statusVariant;
  if (winner) {
    displayStatus = `${winner} team won!`;
    statusVariant = 'success';
  } else if (status.paused) {
    displayStatus = 'Paused';
    statusVariant = 'warning';
  } else if (status.started) {
    displayStatus = 'Playing';
    statusVariant = 'info';
  } else {
    displayStatus = 'Not started';
    statusVariant = 'secondary';
  }

  const nPlayers = Object.keys(players).length;
  const hasEvenPlayers = nPlayers % 2 === 0;

  const renderAlert = () => (
    <div>
      { !hasEvenPlayers && !status.started && <Alert variant="warning"><small>An even number of players required</small></Alert>}
      { status.started && status.paused && <Alert variant="warning"><small>Missing player(s) - Waiting for player(s) to join</small></Alert>}
    </div>
  );

  return (
    <Card>
      <Card.Body>
        <h6>
          Status:&nbsp;
          <Badge variant={statusVariant}>{ displayStatus }</Badge>
        </h6>
        { renderAlert() }
        <div>
          <h6 className="mb-0">Share link: </h6>
          <small>{ shareLink }</small>
        </div>
      </Card.Body>
      <Card.Footer>
        { !status.started && <Button variant="success" disabled={!hasEvenPlayers} onClick={() => socket.emit('start')}>Start</Button> }
        { status.started && <Button variant="outline-warning" onClick={() => socket.emit('reset')}>Reset</Button> }
      </Card.Footer>
    </Card>
  );
};

export default Dashboard;
