import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;

  aside {
    flex: 6;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: #fff;
    background-color: #835afd;

    padding: 0 4rem 8rem 4rem;

    img {
      max-width: 300px;
    }

    strong {
      margin-top: 1rem;

      line-height: 2rem;
      font: 700 2.4rem 'Poppins', sans-serif;
    }

    p {
      margin-top: 0.4rem;

      font-size: 2rem;
      line-height: 2rem;

      color: #f8f8f8;
    }
  }

  main {
    flex: 8;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 1rem;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 320px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  text-align: center;

  > img {
    align-self: center;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 4rem;

      padding: 0 1rem;
      border-radius: 1rem;
      border: 1px solid #a8a8b3;

      background-color: #fff;
    }

    button {
      margin-top: 1rem;
    }

    input,
    button {
      width: 100%;
    }
  }

  .create-room-button {
    margin-top: 6rem;
    height: 6rem;

    img {
      max-width: 20px;
      margin-right: 1rem;
    }
  }

  .separator {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.8rem;
    color: #a8a8b3;

    margin: 2.4rem 0;

    &::before {
      margin-right: 16px;
    }

    &::after {
      margin-left: 16px;
    }

    &::before,
    &::after {
      content: '';

      flex: 1;
      height: 1px;
      background-color: #a8a8b3;

      top: 0;
      left: 0;
    }
  }
`;
