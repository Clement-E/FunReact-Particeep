import React from 'react';
import PropTypes from 'prop-types';

import './sidebar.scss';

const Sidebar = ({
  movies, selectedCategory, refreshCategoryList, selectioned,
  pagination, moviesPerPage,
}) => (
  <div id="sidebar">
    <h1>Filtres</h1>
    <div>
      <div className="container-filtre">
        <span
          className={selectioned === '' ? 'coched' : 'coche'}
          category="reset"
          onClick={() => {
            refreshCategoryList();
          }}
        >
        </span>
        <p className="reset-filtre">TOUS LES FILMS</p>
      </div>
      {movies.map((menuItem, index) => (
        <div className="container-filtre" key={index}>
          <span
            className={selectioned === movies[index] ? 'coched' : 'coche'}
            category={menuItem}
            onClick={() => {
              selectedCategory(menuItem);
            }}
          >
          </span>
          <p>{ menuItem }</p>
        </div>
      ))}
    </div>
    <div className="affichage">
      <p>Résultats par page</p>
      <div>
        {pagination.map(element => (
          <a
            key={element}
            href="#"
            onClick={() => {
              moviesPerPage(element);
            }}
          >
            {element}
          </a>
        ))
      }
      </div>
    </div>
  </div>
);

Sidebar.propTypes = {
  movies: PropTypes.array.isRequired,
  selectedCategory: PropTypes.func.isRequired,
  refreshCategoryList: PropTypes.func.isRequired,
  selectioned: PropTypes.string.isRequired,
  pagination: PropTypes.array.isRequired,
  moviesPerPage: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Sidebar;
