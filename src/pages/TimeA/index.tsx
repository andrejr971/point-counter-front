import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import { DiCssdeck } from 'react-icons/di';

import { Button, Container } from './styles';

import { Header } from '../Game/styles';
import { useSocket } from '../../hooks/socket';

interface IParams {
  id: string;
}

const TimeA: React.FC = () => {
  const { handlePressButton, isBlocked } = useSocket();
  const [blocked, setBlocked] = useState(isBlocked);

  const { id } = useParams<IParams>();

  useEffect(() => {
    setBlocked(isBlocked);
  }, [isBlocked]);

  const history = useHistory();

  const handlePress = useCallback(async () => {
    handlePressButton({ id, time: 'Time A' });
  }, [handlePressButton, id]);

  return (
    <Container>
      <Header>
        <div>
          <button type="button" onClick={() => history.goBack()}>
            <FiArrowLeft />
            <span>Voltar</span>
          </button>
        </div>

        <h1>Time A</h1>
      </Header>

      <Button type="button" onClick={handlePress}>
        <DiCssdeck />
      </Button>
    </Container>
  );
};

export default TimeA;
