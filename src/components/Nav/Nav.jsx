import React from 'react';

import * as S from './styled';

const Nav = ({ children }) => {
  const elementsInNav = (
    children && children.map((child, index) => <S.Element key={index}>{child}</S.Element>)
  );
  const indicatorSize = children.length;

  return (
    <S.Nav>
      <S.List indicatorSize={indicatorSize}>
        {elementsInNav}
      </S.List>
    </S.Nav>
  );
};
export default Nav;
