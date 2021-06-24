import { darken } from 'polished';
import styled from 'styled-components';

type ContainerProps = {
  backgroundColor: string;
  iconAlign?: 'left' | 'right';
};

export const Container = styled.button<ContainerProps>`
  height: 4rem;
  padding: 0 2.4rem;

  color: #fff;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) =>
    props.iconAlign === 'left' ? 'row-reverse' : 'row'};

  border: 0;
  border-radius: 0.8rem;
  background: ${(props) => props.backgroundColor};

  transition: background-color 0.25s;

  &:not(:disabled):hover {
    background: ${(props) => darken(0.1, props.backgroundColor)};
  }

  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;

    &:hover {
      background: ${(props) => props.backgroundColor};
    }
  }

  svg {
    margin: 0 0.4rem;
  }
`;
