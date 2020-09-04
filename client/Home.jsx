import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createRoom, joinRoom } from './redux/modules/room';

const NEW_MODE = 'new';
const JOIN_MODE = 'join';

const Home = () => {
  const [mode, setMode] = useState();
  const [room, setRoom] = useState();
  const [name, setName] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get('room');

    if (roomParam) {
      setMode(JOIN_MODE);
      setRoom(roomParam);
    }
  }, []);

  const submit = (event) => {
    event.preventDefault();
    switch (mode) {
      case NEW_MODE:
        dispatch(createRoom(name));
        break;
      case JOIN_MODE:
        dispatch(joinRoom(room, name));
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm="auto">
          <div className="pt-5 pb-2 text-center">
            <h2>Sequence</h2>
          </div>
          <Form onSubmit={submit}>
            <div className="pt-3 pb-5 text-center">
              <Button type="button" variant={mode === NEW_MODE ? 'secondary' : 'light'} onClick={() => setMode(NEW_MODE)}>
                New game
              </Button>
              <div>- or -</div>
              <Button type="button" variant={mode === JOIN_MODE ? 'secondary' : 'light'} onClick={() => setMode(JOIN_MODE)}>
                Join game
              </Button>
            </div>
            <div className="pt-3">
              {
                mode && (
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
                  </Form.Group>
                )
              }
              {
                mode === 'join' && (
                  <Form.Group>
                    <Form.Label>Room ID</Form.Label>
                    <Form.Control type="text" placeholder="Room" required value={room} onChange={(e) => setRoom(e.target.value)} />
                  </Form.Group>
                )
              }
              { mode && (
                <Button type="submit" variant="success">
                  Start
                </Button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
