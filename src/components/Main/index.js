import React from 'react';
import PropTypes from 'prop-types';

import Card from 'src/containers/Card';

import './main.scss';

const Main = ({
  isLoading, filtre, nonFilteredList, filteredList, previousPage, nextPage,
  displayPreviousBtn, displayNextBtn, displayPrevFilteredBtn, displayNextFilteredBtn,
}) => (
  <div id="main">
    {isLoading === true && (
      <div className="loading">
        <p>Chargement des films en cours</p>
      </div>
    )}
    {isLoading === false && filtre === '' && nonFilteredList.map(element => (
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
    {isLoading === false && filtre !== '' && filteredList.map(element => (
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
    {isLoading === false && filtre === ''
    && (
      <div className="navigation">
        <span
          className={displayPreviousBtn ? 'btn-nav previous' : 'btn-nav-hidden'}
          onClick={() => {
            previousPage();
          }}
        >
        PREVIOUS
        </span>
        <span
          className={displayNextBtn ? 'btn-nav next' : 'btn-nav-hidden'}
          onClick={() => {
            nextPage();
          }}
        >
        NEXT
        </span>
      </div>
    )}
    {isLoading === false && filtre !== ''
    && (
      <div className="navigation">
        <span
          className={displayPrevFilteredBtn ? 'btn-nav previous' : 'btn-nav-hidden'}
          onClick={() => {
            previousPage();
          }}
        >
        PREVIOUS
        </span>
        <span
          className={displayNextFilteredBtn ? 'btn-nav next' : 'btn-nav-hidden'}
          onClick={() => {
            nextPage();
          }}
        >
        NEXT
        </span>
      </div>
    )}
  </div>
);

Main.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  filtre: PropTypes.string.isRequired,
  nonFilteredList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredList: PropTypes.arrayOf(PropTypes.object).isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  displayPreviousBtn: PropTypes.bool.isRequired,
  displayNextBtn: PropTypes.bool.isRequired,
  displayPrevFilteredBtn: PropTypes.bool.isRequired,
  displayNextFilteredBtn: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default Main;
