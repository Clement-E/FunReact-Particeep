import { connect } from 'react-redux';
import { addMovies, promesseResolue } from 'src/store/reducer';
/**
 * Local import
 */
import App from 'src/components/App';

// Action Creators

const mapStateToProps = state => ({
  movies: state.data,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  addMovies: (values) => {
    dispatch(addMovies(values));
  },
  promesseResolue: () => {
    dispatch(promesseResolue());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
