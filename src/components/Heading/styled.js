import styled from 'styled-components';

export const Heading = styled.div.attrs((props) => ({
  maxSize: props.maxSize,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px 25px;
  max-width: ${(props) => props.maxSize};
  height: 80px;
`;

export const Text = styled.span`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 42px;
  font-size: 36px;
  font-weight: 700;
  color: #FFFFFF;
`;
