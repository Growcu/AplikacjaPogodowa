import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 17px;
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  max-width: 300px;
  border-radius: 15px;

  &.primary {
    background: #71C9CE;
  }

  &.secondary {
    background: #A6E3E9;
  }

`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 30px;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 30px;
  line-height: 21px;
  font-size: 18px;
  color: #FFFFFF;
  font-weight: 400;
`;

export const Value = styled(Text)`
  width: 75px;
  font-weight: 700;
`;
