import React from 'react';
import PropTypes from 'prop-types';

import './sidebar.scss';


const Sidebar = ({ movies, selectedCategory, refreshCategoryList, selectioned }) => (
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
        >.
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
          >.
          </span>
          <p>{ menuItem }</p>
        </div>
      ))}
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
