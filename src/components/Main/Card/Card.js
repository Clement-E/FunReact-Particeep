import React from 'react';
import PropTypes from 'prop-types';

// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import './card.scss';

const Card = ({ title, category, likes, dislikes, upvoted, upVote, downVote, downvoted, id, }) => (

  <div id="card">
    <h1 className="card-title">{title}</h1>
    <p className="card-tag">{category}</p>
    <div className="card-vote">
      <div className="card-vote-yes">
        <FontAwesomeIcon
          icon={faThumbsUp}
          className={upvoted ? 'icone upvoted' : 'icone'}
          onClick={() => {
            const newLikes = parseInt(`${likes}`, 10) + 1;
            upVote(newLikes, id);
          }}
        />
        <span className="card-vote-yes-count"> {likes}</span>
      </div>
      <div className="card-vote-no">
        <FontAwesomeIcon
          icon={faThumbsDown}
          color="#d1d1d1"
          className={downvoted ? 'icone downvoted' : 'icone'}
          onClick={() => {
            const newDislikes = parseInt(`${dislikes}`, 10) + 1;
            downVote(newDislikes, id);
          }}
        />
        <span className="card-vote-no-count"> {dislikes}</span>
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
