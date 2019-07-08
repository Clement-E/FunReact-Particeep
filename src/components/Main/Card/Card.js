import React from 'react';
import PropTypes from 'prop-types';

// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import './card.scss';

const Card = ({
  title, category, likes, dislikes, upvoted, upVote,
  downVote, downvoted, id, removeCard,
}) => (

  <div id="card" key={id}>
    <h1 className="card-title">{title}</h1>
    <p className="card-tag">{category}</p>
    <div className="card-vote">
      <div className="card-vote-yes">
        <FontAwesomeIcon
          icon={faThumbsUp}
          className={upvoted ? 'icone upvoted' : 'icone'}
          onClick={() => {
            const newLikes = parseInt(`${likes}`, 10) + 1;
            if (!upvoted) {
              upVote(newLikes, id);
            }
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
            if (!downvoted) {
              downVote(newDislikes, id);
            }
          }}
        />
        <span className="card-vote-no-count"> {dislikes}</span>
      </div>
    </div>
    <p
      className="btn-remove"
      onClick={() => {
        removeCard(id);
      }}
    >
      supprimer
    </p>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  upvoted: PropTypes.bool,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  downvoted: PropTypes.bool,
  id: PropTypes.string.isRequired,
  removeCard: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Card;
