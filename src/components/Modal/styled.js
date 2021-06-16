import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
`;

export const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 40%;
  background: red;

  @media (max-width: 600px) {
    width: 98%
  }

  @media (max-width: 960px) {
    width: 60%
  }
`;
