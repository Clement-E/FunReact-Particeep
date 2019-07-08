import { connect } from 'react-redux';
import { previousPage, nextPage } from 'src/store/reducer';
/**
 * Local import
 */
import Main from 'src/components/Main';

// Action Creators

const mapStateToProps = state => ({
  filtre: state.filtre,
  // logique sur les resultats affichés par page
  nonFilteredList: state.data.map(elem => elem)
    .splice((state.currentPage * state.moviesPerPage) - state.moviesPerPage, state.moviesPerPage),
  filteredList: (state.data.filter(movie => movie.category === state.filtre))
    .splice((state.currentPage * state.offset) - state.offset, state.moviesPerPage),
  displayPreviousBtn: state.currentPage > 1,
  displayNextBtn: state.currentPage * state.moviesPerPage <= state.data.length,
  displayPrevFilteredBtn: state.currentPage > 1,
  displayNextFilteredBtn: (state.data.filter(movie => movie.category === state.filtre))
    .length > state.currentPage * state.moviesPerPage,
});

const mapDispatchToProps = dispatch => ({
  previousPage: () => {
    dispatch(previousPage());
  },
  nextPage: () => {
    dispatch(nextPage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
