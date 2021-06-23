import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  iconAlign?: 'left' | 'right';
  backgroundColor?: string;
  iconSize?: number;
}

const Button: React.FC<IButtonProps> = ({
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
