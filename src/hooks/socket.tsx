import React, { createContext, useCallback, useContext, useState } from 'react';
import { appSocket } from '../websockets/appSocket';

interface ISocketData {
  id: string;
  time: string;
}

interface ISocketContext {
  isBlocked: boolean;
  setIsBlocked(type: boolean): void;
  handlePressButton(data: ISocketData): void;
}

const SocketContext = createContext<ISocketContext>({} as ISocketContext);

const SocketProvider: React.FC = ({ children }) => {
  const [isBlocked, setIsBlocked] = useState(false);

  const handlePressButton = useCallback(async ({ id, time }: ISocketData) => {
    appSocket.emit('press-button', { id, time });
  }, []);

  appSocket.on('blocked', (block: boolean) => {
    setIsBlocked(block);
  });

  return (
    <SocketContext.Provider
      value={{ setIsBlocked, isBlocked, handlePressButton }}
    >
      {children}
    </SocketContext.Provider>
  );
};

function useSocket(): ISocketContext {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error('useSocket must be used within as SocketProvider');
  }

  return context;
}

export { SocketProvider, useSocket };
