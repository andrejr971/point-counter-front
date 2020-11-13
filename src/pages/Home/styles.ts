import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--black);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
  }

  h1 {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: var(--white);
    margin-left: 10px;
    font-size: 40px;

    span {
      margin-top: -23px;
      margin-left: 20px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 10px;

  form {
    width: 100%;

    button {
      margin-top: 10px;
      width: 100%;
      height: 40px;
      background: var(--red);
      border-radius: 16px;
      border: 0;
      color: var(--white);
      font-weight: bold;
      font-size: 20px;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-left: 10px;
        font-size: 25px;
        transition: margin-left 0.2s;
      }

      &:hover {
        svg {
          margin-left: 20px;
        }
      }
    }
  }

  a {
    text-decoration: none;
    margin-top: 10px;
    width: 100%;
    height: 40px;
    background: var(--color-primary);
    border-radius: 16px;
    border: 0;
    color: var(--white);
    font-weight: bold;
    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    transition: opacity 0.2s;

    svg {
      margin-left: 10px;
      font-size: 25px;
    }

    &:hover {
      opacity: 1;

      svg {
        margin-left: 20px;
      }
    }
  }
`;
