import React from 'react';
import { FiLogOut, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  ButtonTime,
  Container,
  Header,
  Main,
  Point,
  TimeA,
  TimeB,
} from './styles';

const Game: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <Link to="/">
            <FiLogOut />
            <span>Sair sala</span>
          </Link>

          <button type="button">
            <FiX />
            <span>Fechar sala</span>
          </button>
        </div>

        <h1>Lista de salas</h1>
      </Header>

      <Main>
        <header>
          <h2>Pontuação</h2>
        </header>
        <TimeA>
          <header>
            <h3>Time A</h3>
          </header>
          <Point>
            <span>120000</span>
          </Point>

          <ButtonTime to="/rooms/1/time-a">Participar do time A</ButtonTime>
        </TimeA>

        <TimeB>
          <header>
            <h3>Time B</h3>
          </header>
          <Point>
            <span>300</span>
          </Point>
          <ButtonTime to="/rooms/1/time-b">Participar do time B</ButtonTime>
        </TimeB>
      </Main>
    </Container>
  );
};

export default Game;
