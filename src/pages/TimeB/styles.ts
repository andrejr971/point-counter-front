import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 0;
  /* border: 2px solid var(--color); */
  background: var(--red);

  svg {
    width: 200px;
    height: 200px;
    color: var(--white);
  }
`;
