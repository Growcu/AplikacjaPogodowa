import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  height: 80px;
  background: #71C9CE;
  box-shadow: 0 0 10px 2px #71C9CE;
  border-radius: 0 0 30px 30px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 350px;
  height: 40px;
  padding: 0;
  background: #A6E3E9;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  list-style: none;
`;

export const Element = styled.li.attrs((props) => ({
  toElementSize: props.toElementSize,
}))`
  height: 100%;
  max-width: calc(100% / ${(props) => props.toElementSize});
  flex-grow: 1;
`;

export const Link = styled.a`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  color: #FFFFFF;
  font-weight: 700;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(113, 201, 206, 0.5);
    border-radius: 20px;
    transition: 0.3s ease-out;
    }

    &:active {
      :before {
        width: 100%;
        height: 100%;
      }
    }
  }

`;
