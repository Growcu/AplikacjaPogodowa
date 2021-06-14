/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 30px;
  text-align: left;
  color: #FFFFFF;
  text-transform: uppercase;
  transition: .3s ease-out;

  @media (max-width: 600px) {
    width: 60%;
  }

  @media (max-width: 960px) {
    width: 70%;
  }

  &.primary {
    background: #A6E3E9;
    border: 1px solid #71C9CE;
  }

  &.secondary {
    background: #71C9CE;
    border: 1px solid #A6E3E9;
  }

  &.large {
    max-width: 350px;
    height: 50px;
    padding: 25px 12px;
    line-height: 25px;
    font-size: 18px;
  }

  &.medium {
    max-width: 300px;
    height: 40px;
    padding: 20px 10px;
    line-height: 20px;
    font-size: 16px;
  }

  &.small {
    max-width: 275px;
    height: 35px;
    padding: 20px 10px;
    line-height: 15px;
    font-size: 14px;
  }

  &:focus {
    box-shadow: inset 0px 4px 5px rgba(0, 0, 0, 0.25);
    outline: 4px solid #71C9CE;
  }
`;
