import React from 'react';
import * as S from './styled';

const BasicInfo = ({ value, describe, size = 'medium' }) => (
  <S.BasicInfo>
    <S.Value className={size}>
      {value}
    </S.Value>
    <S.Description className={size}>
      {describe}
    </S.Description>
  </S.BasicInfo>
);

export default BasicInfo;
