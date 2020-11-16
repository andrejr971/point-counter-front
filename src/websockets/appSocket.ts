import IO from 'socket.io-client';

export const appSocket = IO('https://api-point.andrejr.dev', {
  transports: ['websocket'],
});
