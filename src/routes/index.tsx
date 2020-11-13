import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from '../pages/Game';
import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import TimeA from '../pages/TimeA';
import TimeB from '../pages/TimeB';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/rooms" exact component={Rooms} />
      <Route path="/rooms/:id" exact component={Game} />
      <Route path="/rooms/:id/time-a" component={TimeA} />
      <Route path="/rooms/:id/time-b" component={TimeB} />
    </Switch>
  );
};

export default Routes;
