import { connect } from 'react-redux';
/**
 * Local import
 */
import Main from 'src/components/Main';

// Action Creators

const mapStateToProps = state => ({
  filtre: state.filtre,
  filteredList: state.data.filter(movie => movie.category === state.filtre),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
