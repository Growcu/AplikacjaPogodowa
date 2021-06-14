import React, { useState } from 'react';
import Input from './Input';

export default {
  title: 'UI/Input',
  component: Input,
};

export const Default = ({ ...args }) => (
  <Input {...args} />
);

export const WithContent = ({ ...args }) => (
  <Input {...args} placeholder="City..." />
);

export const Working = ({ ...args }) => {
  const [text, setText] = useState('');

  const handleOnChange = (e) => setText(e.target.value);

  return (
    <Input {...args} value={text} onChange={handleOnChange} placeholder="Search" />
  );
};
