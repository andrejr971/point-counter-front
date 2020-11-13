import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { DiCssdeck } from 'react-icons/di';

import { Button, Container } from './styles';

import { Header } from '../Game/styles';

const TimeA: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <div>
          <button type="button" onClick={() => history.goBack()}>
            <FiArrowLeft />
            <span>Voltar</span>
          </button>
        </div>

        <h1>Time B</h1>
      </Header>

      <Button type="button">
        <DiCssdeck />
      </Button>
    </Container>
  );
};

export default TimeA;
