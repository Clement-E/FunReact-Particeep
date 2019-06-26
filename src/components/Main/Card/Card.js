import React from 'react';
import PropTypes from 'prop-types';

// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import './card.scss';

const Card = () => (
  <div id="card">
    <h1 className="card-title">Titre de taille normale</h1>
    <p className="card-tag">Tag</p>
    <div className="card-vote">
      <div className="card-vote-yes">
        <FontAwesomeIcon
          icon={faThumbsUp}
          color="#d1d1d1"
          className="icone"
        />
        <span className="card-vote-yes-count"> 5</span>
      </div>
      <div className="card-vote-no">
        <FontAwesomeIcon
          icon={faThumbsDown}
          color="#d1d1d1"
          className="icone"
        />
        <span className="card-vote-no-count"> 2</span>
      </div>
    </div>
    <p className="btn-remove">supprimer</p>
  </div>
);

// Card.propTypes = {
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
export default Card;
