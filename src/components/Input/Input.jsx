import React from 'react';

import * as S from './styled';

const Input = ({
  size = 'medium', variant = 'primary', value, onChange, ...args
}) => (
  <S.Input {...args} value={value} onChange={onChange} className={`${size} ${variant}`} />
);

export default Input;
