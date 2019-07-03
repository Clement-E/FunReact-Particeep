import React from 'react';
import PropTypes from 'prop-types';

import Card from 'src/containers/Card';

import './main.scss';

const Main = ({ movies, isLoading, filtre, filteredList }) => (
  <div id="main">
    {isLoading === true && (
      <div className="loading">
        <p>Chargement des films en cours</p>
      </div>
    )}
    {isLoading === false && filtre === '' && movies.map(element => (
      <Card
        key={element.id}
        id={element.id}
        title={element.title}
        category={element.category}
        likes={element.likes}
        dislikes={element.dislikes}
        upvoted={element.upvoted}
        downvoted={element.downvoted}
      />
    ))}
    {isLoading === false && filteredList.map(element => (
      <Card
        key={element.id}
        id={element.id}
        title={element.title}
        category={element.category}
        likes={element.likes}
        dislikes={element.dislikes}
        upvoted={element.upvoted}
        downvoted={element.downvoted}
      />
    ))}
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
