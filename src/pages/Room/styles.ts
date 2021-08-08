import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 2rem;
  border-bottom: 1px solid #e2e2e2;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1120px;
    margin: 0 auto;

    > img {
      max-height: 45px;
    }
  }
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 1.4rem;
      border-radius: 1rem;
      background: #fefefe;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);

      resize: vertical;
      min-height: 130px;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 3.2rem;

      > span {
        font-weight: 500;
        font-size: 1.4rem;
        color: #737380;

        button {
          font-size: inherit;
          font-weight: inherit;

          background: transparent;
          border: 0;
          color: #835afd;
          text-decoration: underline;
        }
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  margin: 2rem 0 1rem;

  h1 {
    font-family: 'Poppins', sans-serif;

    color: #29292e;
    font-size: 2.8rem;
  }

  > span {
    margin-left: 2rem;
    padding: 0.4rem 0.8rem;

    color: #fff;
    font-weight: 500;
    font-size: 1.8rem;

    background: #e559f9;
    border-radius: 9999px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
  }

  span {
    margin-left: 1rem;
    color: #29292e;
    font-weight: 500;
    font-size: 1.8rem;
  }
`;
