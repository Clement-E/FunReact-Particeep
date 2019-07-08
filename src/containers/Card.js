import { connect } from 'react-redux';
import { upVote, downVote, removeCard } from 'src/store/reducer';
/**
 * Local import
 */
import Card from 'src/components/Main/Card/Card';

// Action Creators

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  upVote: (newLikes, id) => {
    dispatch(upVote(newLikes, id));
  },
  downVote: (newDislikes, id) => {
    dispatch(downVote(newDislikes, id));
  },
  removeCard: (id) => {
    dispatch(removeCard(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
