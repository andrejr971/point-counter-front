import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --color-primary: #3D3D4D;
    --color: #7A7A80;
    --red: #DC1637;
    --black: #1B1B1F;
    --black-ligth: #29292E;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--black);
    color: var(--color-primary);
    
    -webkit-font-smoothing: antialiased;

    overflow-y: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 3px;
      background: rgba(0, 0, 0, 0.02);
      border-radius: 2px;
    }
    
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: var(--color);
    }
  }

  body, input, button, textarea {
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
