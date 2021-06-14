import React from 'react';

import * as S from './styled';

const Nav = ({ links }) => {
  const howMuchElements = links && links.length;

  const setLinks = (items) => (
    items.map((item, index) => (
      <S.Element key={index} toElementSize={howMuchElements}>
        <S.Link href={item.link} toIndicatorSize={howMuchElements}>
          {item.name}
        </S.Link>
      </S.Element>
    ))
  );

  return (
    <S.Nav>
      <S.List className="list">
        {links && setLinks(links)}
      </S.List>
    </S.Nav>
  );
};
export default Nav;
