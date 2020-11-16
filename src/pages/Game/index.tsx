import React, { useCallback, useEffect, useState } from 'react';
import { FiLogOut, FiMinus, FiPlus, FiX } from 'react-icons/fi';
import { Link, useHistory, useParams } from 'react-router-dom';
import Modal from '../../components/Modal';
import api from '../../services/api';
import { appSocket } from '../../websockets/appSocket';

import {
  ButtonTime,
  Container,
  DivButton,
  Header,
  Main,
  Point,
  TimeA,
  TimeB,
} from './styles';

interface IRooms {
  id: string;
  name: string;
  pointTimeA: number;
  pointTimeB: number;
}

interface IParams {
  id: string;
}

const Game: React.FC = () => {
  const [room, setRoom] = useState<IRooms>({} as IRooms);
  const [isVisible, setIsVisible] = useState(false);

  const { id } = useParams<IParams>();
  const history = useHistory();

  useEffect(() => {
    try {
      api.get(`/rooms/${id}`).then(response => setRoom(response.data));
      appSocket.emit('choose-room', id);
    } catch {
      history.push('/');
    }
  }, [id, history]);

  const handleDeleteRoom = useCallback(async () => {
    await api.delete(`/rooms/${id}`);

    history.push('/');
  }, [id, history]);

  const handleAddPointTimeA = useCallback(async () => {
    const { data } = await api.patch(`/rooms/${id}/point-a`);

    setRoom(data);
  }, [id]);

  const handleRemovePointTimeA = useCallback(async () => {
    const { data } = await api.patch(`/rooms/${id}/point-a/remove`);

    setRoom(data);
  }, [id]);

  const handleAddPointTimeB = useCallback(async () => {
    const { data } = await api.patch(`/rooms/${id}/point-b`);

    setRoom(data);
  }, [id]);

  const handleRemovePointTimeB = useCallback(async () => {
    const { data } = await api.patch(`/rooms/${id}/point-b/remove`);

    setRoom(data);
  }, [id]);

  return (
    <Container>
      <Header>
        <div>
          <Link to="/">
            <FiLogOut />
            <span>Sair sala</span>
          </Link>

          <button type="button" onClick={handleDeleteRoom}>
            <FiX />
            <span>Fechar sala</span>
          </button>
        </div>

        <h1>{room.name}</h1>
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
            <span>{room.pointTimeA}</span>
          </Point>

          <DivButton>
            <ButtonTime to={`/rooms/${room.id}/time-a`}>Time A</ButtonTime>
            <button type="button" onClick={handleRemovePointTimeA}>
              <FiMinus />
            </button>
            <button type="button" onClick={handleAddPointTimeA}>
              <FiPlus />
            </button>
          </DivButton>
        </TimeA>

        <TimeB>
          <header>
            <h3>Time B</h3>
          </header>
          <Point>
            <span>{room.pointTimeB}</span>
          </Point>

          <DivButton>
            <ButtonTime to={`/rooms/${room.id}/time-b`}>Time B</ButtonTime>
            <button type="button" onClick={handleRemovePointTimeB}>
              <FiMinus />
            </button>
            <button type="button" onClick={handleAddPointTimeB}>
              <FiPlus />
            </button>
          </DivButton>
        </TimeB>
      </Main>

      <Modal isVisible={isVisible} setIsVisible={setIsVisible} id={id} />
    </Container>
  );
};

export default Game;
