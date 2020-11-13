import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, ListRooms, Main } from './styles';

const Rooms: React.FC = () => {
  return (
    <Container>
      <Main>
        <header>
          <Link to="/">
            <FiChevronLeft />
          </Link>

          <h1>Lista de salas</h1>
        </header>

        <ListRooms>
          <li>
            <strong>Sala 1</strong>
            <Link to="/rooms/1">
              <FiChevronRight />
            </Link>
          </li>
          <li>
            <strong>Sala 1</strong>
            <Link to="/rooms/1">
              <FiChevronRight />
            </Link>
          </li>
          <li>
            <strong>Sala 1</strong>
            <Link to="/rooms/1">
              <FiChevronRight />
            </Link>
          </li>
          <li>
            <strong>Sala 1</strong>
            <Link to="/rooms/1">
              <FiChevronRight />
            </Link>
          </li>
          <li>
            <strong>Sala 1</strong>
            <Link to="/rooms/1">
              <FiChevronRight />
            </Link>
          </li>
          <li>
            <strong>Sala 1</strong>
            <Link to="/rooms/1">
              <FiChevronRight />
            </Link>
          </li>
          <li>
            <strong>Sala 1</strong>
            <Link to="/rooms/1">
              <FiChevronRight />
            </Link>
          </li>
          <li>
            <strong>Sala 1</strong>
            <Link to="/rooms/1">
              <FiChevronRight />
            </Link>
          </li>
          <li>
            <strong>Sala 1</strong>
            <Link to="/rooms/1">
              <FiChevronRight />
            </Link>
          </li>
        </ListRooms>
      </Main>
    </Container>
  );
};

export default Rooms;
