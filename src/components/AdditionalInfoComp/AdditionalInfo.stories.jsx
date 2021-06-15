import React from 'react';
import AdditionalInfo from './AdditionalInfo';

import Icon from '../../assets/HumidityIcon.svg';

export default {
  title: 'UI/AddtionalInfo',
  component: AdditionalInfo,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

export const Default = ({ ...args }) => (
  <AdditionalInfo {...args} />
);

export const WithElements = Default.bind({});
WithElements.args = {
  icon: Icon,
  description: 'Pressure',
  value: '1090hPa',
};
