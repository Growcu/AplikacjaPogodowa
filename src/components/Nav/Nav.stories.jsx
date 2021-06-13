/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Nav from './Nav';

export default {
  title: 'UI/Nav',
  component: Nav,
};

export const Default = () => <Nav />;

export const WithChildren = () => (
  <Nav>
    <a href="#">Location</a>
    <a href="#">City</a>
  </Nav>
);

// export const Working = () => {
//   const [isActive, setIsActive] = useState(false);

//   const handleOnClick = () => setIsActive(!isActive);

//   return (
//     <Nav>
//       <a href="#">Location</a>
//       <a href="#">City</a>
//     </Nav>
//   );
// };
