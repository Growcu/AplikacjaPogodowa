import React from 'react';
import Heading from './Heading';

export default {
  title: 'UI/Heading',
  component: Heading,
};

export const Default = ({ ...args }) => (
  <Heading {...args} text="Heading" />
);

export const WithSize = ({ ...args }) => (
  <Heading {...args} text="Heading" maxSize="400px" />
);
