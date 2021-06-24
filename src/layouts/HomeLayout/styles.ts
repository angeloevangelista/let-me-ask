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
