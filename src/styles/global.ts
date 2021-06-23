import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    height: 100vh;
  }

  body {
    background: #f0f0f0;
    color: #29292e;
  }


  body,
  input,
  button,
  textarea {
    font: 400 1.6rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  strong {
    font-weight: 500;
  }

  @media (max-width: 700px) {
    :root {
      font-size: 65%;
    }
  }
`;

export { globalStyle as GlobalStyle };
