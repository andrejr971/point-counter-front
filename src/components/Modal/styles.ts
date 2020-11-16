import styled from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000;

  position: fixed;
  top: 0;
  left: 0;

  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 10px;

  background: var(--black);
  border-radius: 16px;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.6);

  header {
    display: flex;
    justify-content: flex-end;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;
      background: transparent;
      border: 0;

      svg {
        font-size: 25px;
        color: var(--red);
      }
    }
  }

  > div {
    margin: 50px auto;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      text-align: center;
      font-size: 50px;
      font-weight: bold;
      color: var(--white);
    }

    footer {
      margin-top: 50px;

      display: flex;
      flex-direction: column;
    }
  }
`;
