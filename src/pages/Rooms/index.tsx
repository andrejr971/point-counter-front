import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, ListRooms, Main } from './styles';

interface IRooms {
  id: string;
  name: string;
  pointTimeA: number;
  pointTimeB: number;
}

const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState<IRooms[]>([]);

  useEffect(() => {
    api.get('/rooms').then(response => setRooms(response.data));
  }, []);

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
          {rooms.map(room => (
            <li key={room.id}>
              <strong>{room.name}</strong>
              <Link to={`/rooms/${room.id}`}>
                <FiChevronRight />
              </Link>
            </li>
          ))}
        </ListRooms>
      </Main>
    </Container>
  );
};

export default Rooms;
