import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  background-color: #fff;
  border: solid #835afd 2px;
  border-radius: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    background-color: #835afd;

    svg {
      color: #fff;
    }
  }

  > span {
    flex: 1;
    align-self: center;

    border: 0;
    outline: 0;

    padding: 0 1.4rem;
  }
`;
