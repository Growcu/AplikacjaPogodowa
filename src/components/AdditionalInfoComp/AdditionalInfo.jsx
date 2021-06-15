import React from 'react';

import * as S from './styled';

// eslint-disable-next-line no-unused-vars
const AdditionalInfo = ({
  description, icon, value, variant = 'primary',
}) => (
  <S.Wrapper className={variant}>
    <S.Icon>
      <img src={icon} alt="Icon" />
    </S.Icon>
    <S.Text>
      {description}
    </S.Text>
    <S.Value>
      {value}
    </S.Value>
  </S.Wrapper>
);

export default AdditionalInfo;
