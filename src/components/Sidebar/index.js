import React from 'react';
import PropTypes from 'prop-types';

import './sidebar.scss';

const Sidebar = () => (
  <div id="sidebar">
    <h1>Filtres</h1>
    <div>
      <div className="container-filtre">
        <span className="coched"></span>
        <p>Action</p>
      </div> 
      <div className="container-filtre">
        <span className="coche"></span>
        <p>Action</p>
      </div>
      <div className="container-filtre">
        <span className="coche"></span>
        <p>Action</p>
      </div>   
    </div>
    <div className="affichage">
      <p>Résultats par page</p>
      <div>
        <a href="#">4</a> - <a href="#">8</a> - <a href="#">12</a>
      </div>
    </div>
  </div>
);

// Sidebar.propTypes = {
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
export default Sidebar;
