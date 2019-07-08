/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'src/containers/Sidebar';
import Main from 'src/containers/Main';
// promise
import { movies$ } from '../../datas/movies';


/**
 * Local import
 */
// Composants

// Styles et assets
import './index.scss';

/**
 * Code
 */
// const App = () => (
//   <div id="app">
//     <Sidebar />
//     <Main />
//   </div>
// );

class App extends React.Component {
  componentDidMount() {
    // resoudre la promesse et ajouter les films au reducer
    const { addMovies, promesseResolue } = this.props;
    // console.log(movies$.then(values => (console.log('resolue et les values sont:', values))));
    movies$
      .then(values => (addMovies(values)))
      .then(() => (promesseResolue()));
  }

  render() {
    const { movies, isLoading } = this.props;
    // const { testfunction } = this.props;
    return (
      <div id="app">
        <Sidebar />
        <Main
          movies={movies}
          isLoading={isLoading}
        />
      </div>
    );
  }
}
/**
 * Export
 */
export default App;

App.propTypes = {
  addMovies: PropTypes.func.isRequired,
  promesseResolue: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
