import React from 'react';
import ForecastDay from './ForecastDay';

export default {
  title: 'UI/ForecastDay',
  component: ForecastDay,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

export const Default = ({ ...args }) => (
  <ForecastDay {...args} />
);

export const WithElements = Default.bind({});
WithElements.args = {
  date: '12/02',
  description: 'Clear sky',
  value: '12°/18°',
};
