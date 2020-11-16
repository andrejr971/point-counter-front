import React, { useCallback, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { appSocket } from '../../websockets/appSocket';

import { Container, Content } from './styles';

interface ModalProps {
  isVisible: boolean;
  id: string;
  setIsVisible(visible: boolean): void;
}

interface ISocketTimeProps {
  visible: boolean;
  name: string;
}

const Modal: React.FC<ModalProps> = ({ isVisible, setIsVisible, id }) => {
  const [time, setTime] = useState('');

  appSocket.on('time-press', ({ name, visible }: ISocketTimeProps) => {
    setTime(name);
    setIsVisible(visible);
  });

  const handleVisible = useCallback(() => {
    setIsVisible(false);
    appSocket.emit('active', id);
  }, [setIsVisible, id]);

  return (
    <Container isVisible={isVisible}>
      <Content>
        <header>
          <button type="button" onClick={handleVisible}>
            <FiX />
          </button>
        </header>
        <div>
          <h3>{time}</h3>
        </div>
      </Content>
    </Container>
  );
};

export default Modal;
