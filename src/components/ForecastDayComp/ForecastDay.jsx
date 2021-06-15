import React from 'react';

import * as S from './styled';

const ForecastDay = ({
  date, description, value, variant = 'primary',
}) => (
  <S.Wrapper className={variant}>
    <S.Date>
      {date}
    </S.Date>
    <S.Description>
      {description}
    </S.Description>
    <S.Value>
      {value}
    </S.Value>
  </S.Wrapper>
);
export default ForecastDay;
