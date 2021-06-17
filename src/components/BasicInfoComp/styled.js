import styled from 'styled-components';

export const BasicInfo = styled.div`
  display: flex
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizin: border-box;
  padding: 15px;
  max-width: 320px;
  max-height: 200px;
`;

export const Value = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #FFFFFF;

  &.large {
    font-size: 64px;
    line-height: 75px;
    height: 100px;
  }

  &.medium {
    font-size: 48px;
    line-height: 56px;
    height: 70px;
  }

  &.small {
    font-size: 32px;
    line-height: 38px;
    height: 50px;
  }
`;

export const Description = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  color: #FFFFFF;

  &.large {
    font-size: 36px;
    line-height: 42px;
    height: 50px;
  }

  &.medium {
    font-size: 24px;
    line-height: 28px;
    height: 40px;
  }

  &.small {
    font-size: 16px;
    line-height: 24px;
    height: 30px;
  }
`;
