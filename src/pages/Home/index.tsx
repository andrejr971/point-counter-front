/* eslint-disable no-console */
import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiChevronRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input';

import { Container, Content, DivLogo, Main } from './styles';

import logo from '../../assets/puzzle.svg';

interface IFormData {
  name: string;
}

const Home: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    (data: IFormData) => {
      console.log(data);

      history.push(`/rooms/1`);
    },
    [history],
  );

  return (
    <Container>
      <Main>
        <DivLogo>
          <img src={logo} alt="logo" />
          <h1>
            Point
            <span>Counter</span>
          </h1>
        </DivLogo>

        <Content>
          <Form onSubmit={handleSubmit}>
            <Input name="classroom" placeholder="Nome da sala" required />
            <button type="submit">
              Iniciar
              <FiChevronRight />
            </button>
          </Form>

          <Link to="/rooms">Salas</Link>
        </Content>
      </Main>
    </Container>
  );
};

export default Home;
