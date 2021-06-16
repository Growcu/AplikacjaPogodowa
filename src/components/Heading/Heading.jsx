import React from 'react';
import * as S from './styled';

const Heading = ({ text, maxSize = '320px', ...rest }) => (
  <S.Heading maxSize={maxSize}>
    <S.Text {...rest}>
      {text}
    </S.Text>
  </S.Heading>
);
export default Heading;
