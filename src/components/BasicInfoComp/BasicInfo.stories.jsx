import React from 'react';
import BasicInfo from './BasicInfo';

export default {
  title: 'UI/BasicInfo',
  component: BasicInfo,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
  },
};

export const Default = ({ ...args }) => (
  <BasicInfo {...args} value="23" describe="Clear sky" />
);
