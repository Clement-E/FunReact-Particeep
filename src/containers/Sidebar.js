import { connect } from 'react-redux';
import { selectedCategory, refreshCategoryList, moviesPerPage } from 'src/store/reducer';
/**
 * Local import
 */
import Sidebar from 'src/components/Sidebar';

// Action Creators

const mapStateToProps = state => ({
  movies: [...new Set(state.data.map(element => element.category))],
  selectioned: state.filtre,
  pagination: state.pagination,
});

const mapDispatchToProps = dispatch => ({
  selectedCategory: (category) => {
    dispatch(selectedCategory(category));
  },
  refreshCategoryList: () => {
    dispatch(refreshCategoryList());
  },
  moviesPerPage: (number) => {
    dispatch(moviesPerPage(number));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
