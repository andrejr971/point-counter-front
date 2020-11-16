import styled, { css } from 'styled-components';

interface IButtonProps {
  isBlocked?: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<IButtonProps>`
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

  ${props =>
    props.isBlocked &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;
