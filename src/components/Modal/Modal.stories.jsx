import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'UI/Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
    onClose: {
      defaultValue: undefined,
    },
  },
};

export const Default = ({ ...args }) => (
  <Modal {...args} onClose={undefined} />
);

export const WithHeading = ({ ...args }) => (
  <Modal {...args} onClose={undefined} heading="Warszawa" />
);

export const WithChildren = ({ ...args }) => (
  <Modal {...args} onClose={undefined} heading="Moscow">
    <div style={{ width: '300px', height: '400px', background: 'black' }} />
    <button type="button">Back</button>
  </Modal>
);

export const Working = ({ ...args }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => setIsOpen(true);
  const handleModalClose = () => setIsOpen(false);

  return (
    <>
      <Modal {...args} onClose={handleModalClose} isOpen={isOpen} />
      <button type="button" onClick={handleModalOpen}>Open Modal</button>
    </>
  );
};
