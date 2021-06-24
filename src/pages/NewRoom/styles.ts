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

  h2 {
    font-size: 2rem;

    margin: 3rem 0 2rem;
    font-family: 'Poppins', sans-serif;
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

  p {
    margin-top: 0.8rem;

    color: #737380;
    font-size: 1.6rem;

    a {
      display: block;
      color: #e559f9;
    }
  }
`;
