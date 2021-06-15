import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 17px;
  width: 300px;
  height: 70px;
  box-shadow: 5px 0px 5px 1px #E3FDFD;
  border-radius: 0px 20px 20px 0px;

  &.primary {
    background: #A6E3E9;
  }

  &.secondary {
    background: #71C9CE;
  }
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  font-size: 18px;
  line-height: 21;
  color: #FFFFFF;
`;

export const Date = styled(Text)`
  width: 70px;
`;

export const Description = styled(Text)`
  width: 120px;
`;

export const Value = styled(Text)`
  width: 75px;
`;
