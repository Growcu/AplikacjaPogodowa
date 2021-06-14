import React from 'react';
import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = ({ ...args }) => (
  <Button {...args} />
);

export const WithContent = ({ ...args }) => (
  <Button {...args}>
    See more
  </Button>
);
