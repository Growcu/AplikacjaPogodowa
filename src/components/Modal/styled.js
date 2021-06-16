import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  transition: opacity 0.5s;

  &.modal-enter {
    opacity: 0;
  }

  &.modal-enter-active {
    opacity: 1;
  }

  &.modal-exit {
    opacity: 1;
  }

  &.modal-exit-active {
    opacity: 0;
  }
`;

export const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 300px;
  max-height: 700px;
  width: 95%;
  background: #71C9CE;

  @media (min-width: 600px) {
    width: 60%;
  }
  @media (min-width: 960px) {
    width: 40%;
  }
`;

export const Heading = styled.div`
  display: flex:
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px 25px;
  height: 80px;
  width: 320px;
`;

export const Text = styled.span`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: #FFFFFF;
`;
