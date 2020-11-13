import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: var(--black);
`;

export const Header = styled.header`
  width: 100%;
  padding: 10px;
  background: var(--black);
  color: var(--white);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;

    button {
      margin-left: 20px;
    }

    a,
    button {
      width: 150px;
      color: var(--white);
      text-decoration: none;
      display: flex;
      align-items: center;
      opacity: 0.8;
      transition: opacity 0.2s;
      background: none;
      border: 0;

      svg {
        font-size: 25px;
        transition: margin-right 0.2s;
        margin-right: 10px;
      }

      &:hover {
        svg {
          margin-right: 20px;
        }

        opacity: 1;
      }
    }
  }
`;

export const Main = styled.main`
  padding-top: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  > header {
    grid-column: 1/3;
    margin: 10px 0;
    padding-bottom: 10px;

    h2 {
      text-align: center;
      color: var(--white);

      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
  }

  header {
    margin: 10px 0;
    padding-bottom: 10px;

    h3 {
      text-align: center;
      color: var(--white);
      font-size: 50px;
      font-weight: bold;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    > header {
      grid-column: 1/2;
    }
  }
`;

export const TimeA = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  padding: 10px;

  @media (max-width: 800px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

export const TimeB = styled.div`
  height: 100%;
  padding: 10px;
`;

export const Point = styled.div`
  width: 100%;

  span {
    margin: 0 auto;
    background: var(--color-primary);
    border-radius: 16px;
    color: var(--white);

    font-size: 100px;
    font-weight: bold;

    display: block;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
      font-size: 50px;
      height: 80px;
    }
  }
`;

export const ButtonTime = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  margin: 10px auto;
  /* width: 100%; */
  padding: 10px;
  background: var(--red);
  border-radius: 16px;
  border: 0;
  color: var(--white);
  font-weight: bold;
  font-size: 20px;
`;
