import React from 'react';
import { useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { default as PlayingCard } from './Card';

const Hand = () => {
  const cards = useSelector((state) => state.hand.cards);

  if (!cards) return null;

  return (
    <Card>
      <div className="card-header">Your cards</div>
      <Card.Body>
        <Row noGutters>
          {
            cards.map((card, i) => (
              <Col key={i} sm="auto">
                <div className="m-1">
                  <PlayingCard card={card} />
                </div>
              </Col>
            ))
          }
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Hand;
