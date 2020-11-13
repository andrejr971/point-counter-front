import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: var(--black);

  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 650px;
  padding: 10px;
  margin-top: 20px;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      width: 40px;
      height: 40px;
      border-radius: 16px;
      background: var(--red);
      color: var(--white);
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 20px;
      }
    }

    h1 {
      color: var(--white);
    }
  }
`;

export const ListRooms = styled.ul`
  margin-top: 20px;

  width: 100%;
  list-style: none;

  li {
    padding: 10px;
    /* height: 40px; */

    background: var(--white);
    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    strong {
      font-weight: bold;
      font-size: 20px;
    }

    & + li {
      margin-top: 10px;
    }

    a {
      text-decoration: none;
      width: 40px;
      height: 40px;
      border-radius: 16px;
      background: var(--red);
      color: var(--white);
      text-decoration: none;
      border: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 20px;
      }
    }
  }
`;
