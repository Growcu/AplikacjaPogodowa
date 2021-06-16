import React from 'react';
import Modal from './Modal';

export default {
  title: 'UI/Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      defaultValue: true,
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
