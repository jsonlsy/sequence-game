import React from 'react';
import { useSelector } from 'react-redux';

import Home from './Home';
import Game from './Game';

const App = () => {
  const room = useSelector((state) => state.room);

  if (room && room.set) {
    return <Game room={room.room} playerName={room.playerName} />;
  }
  return <Home />;
};

export default App;
