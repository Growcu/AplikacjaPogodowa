import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  transition: .3s ease-out;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 60%;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-radius: 50%;
  }

  &.large {
    padding: 12px 16px;
    width: 250px;
    max-width: 250px;
    height: 50px;
    border-radius: 15px;
  }

  &.medium {
    padding: 7px 20px;
    width: 200px;
    max-width: 200px;
    height: 40px;
    border-radius: 10px;
  }

  &.small {
    padding: 7px 20px;
    width: 150px;
    max-width: 150px;
    height: 35px;
    border-radius: 10px;
  }

  &.primary {
    background: #A6E3E9;

    :focus {
      outline: 4px solid #71C9CE;
    }

    :active {
      :before {
        width: 40px;
        height: 40px;
        background: rgba(113, 201, 206, 0.7);
      }
    }
  }

  &.secondary {
    background: #71C9CE;

    :focus {
      outline: 4px solid #A6E3E9;
    }

    :active {
      :before {
        width: 40px;
        height: 40px;
        background: rgba(166, 227, 233, 0.4);
      }
    }
  }

  &:hover {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Content = styled.span`
  display: block;
  flex-grow: 1;
  text-align: center;
  color: #FFFFFF;
  font-size: 18px;

  &.large {
    line-height: 26px;
  }

  &.medium {
    line-height: 25px;
  }

  &.small {
    line-height: 20px;
    font-size: 14px;
  }
`;
