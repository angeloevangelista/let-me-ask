import styled from 'styled-components';

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
