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

export const List = styled.ul.attrs((props) => ({
  indocatorSize: props.indicatorSize,
}))`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  max-width: 350px;
  height: 40px;
  padding: 0;
  background: #A6E3E9;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  list-style: none;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: calc(100% / ${(props) => props.indicatorSize});
    height: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(113, 201, 206, 0.5);
    border-radius: 20px; 
  }
`;

export const Element = styled.li`
  flex-grow: 1;
  text-align: center;
  vertical-align: center;
  line-height: 20px;
  z-index: 1;
  
  & > a {
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 700;
  }
`;
