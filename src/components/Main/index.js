import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card/Card';

import './main.scss';

const Main = () => (
  <div id="main">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);

// Main.propTypes = {
//     username: PropTypes.string.isRequired,
//     passwordInput: PropTypes.string.isRequired,
//     updateFormField: PropTypes.func.isRequired,
//     connectUser: PropTypes.func.isRequired,
//     isConnected: PropTypes.bool.isRequired,
//     loginMessage: PropTypes.string.isRequired,
//     loginStatus: PropTypes.string.isRequired,
//   };
  
  /**
   * Export
   */
export default Main;
