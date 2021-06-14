/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Nav from './Nav';

export default {
  title: 'UI/Nav',
  component: Nav,
};

export const Default = () => <Nav />;

export const WithChildren = () => {
  const links = [
    {
      name: 'City',
      link: '#',
    },
    {
      name: 'Location',
      link: '#',
    },
  ];

  return <Nav links={links} />;
};
