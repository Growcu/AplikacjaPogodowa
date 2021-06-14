import React from 'react';
import * as S from './styled';

const Button = ({
  children, size = 'medium', variant = 'primary', onClick, ...args
}) => (
  <S.Button onClick={onClick} className={`${size} ${variant}`} {...args}>
    {children && (
      <S.Content className={size}>
        {children}
      </S.Content>
    )}
  </S.Button>
);

export default Button;
