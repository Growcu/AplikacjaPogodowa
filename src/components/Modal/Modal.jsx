/* eslint-disable no-undef */
import React, { useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import * as S from './styled';
import useOnClickOutside from '../../hooks/outSideClickHook';

const Modal = ({
  children, isOpen = true, onClose, ...rest
}) => {
  // const [isActive, setIsActive] = useState(false);
  const modalRef = useRef(null);

  const handleOutsideClick = () => {
    if (isOpen && onClose && isActive) {
      onClose();
    }
  };

  // const handleModalEntered = setIsActive(true);
  // const handleModalExit = setIsActive(false);

  useOnClickOutside(modalRef, handleOutsideClick);

  return createPortal(
    // <CSSTransition
    //   in={isOpen}
    //   timeout={500}
    //   mountOnEnter
    //   unmountOnExit
    //   classNames="modal"
    //   onEntered={handleModalEntered}
    //   onExit={handleModalExit}
    // >
    // <S.Background>
    <S.Modal {...rest} />,
    // </S.Background>
    // </CSSTransition>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
