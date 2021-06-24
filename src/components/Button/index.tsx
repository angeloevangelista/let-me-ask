import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: IconType;
  iconAlign?: 'left' | 'right';
  backgroundColor?: string;
  iconSize?: number;
};

const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  iconAlign,
  iconSize,
  backgroundColor = '#835afd',
  ...rest
}) => (
  <Container
    {...rest}
    iconAlign={iconAlign ?? 'right'}
    backgroundColor={backgroundColor}
  >
    {children}
    {Icon && <Icon size={iconSize ?? 20} />}
  </Container>
);

export { Button };
