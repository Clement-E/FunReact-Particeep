/**
 * Initial State
 */
const initialState = {
  data: [],
  isLoading: true,
  categories: [],
  filtre: '',
  hasVoted: false,
};

/**
 * Types
 */
export const ADD_MOVIES = 'ADD_MOVIES';
export const PROMESSE_RESOLUE = 'PROMESSE_RESOLUE';
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY';
export const REFRESH_CATEGORY_LIST = 'REFRESH_CATEGORY_LIST';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';

/**
 * Selectors
 */

// export const getMovies = state => (
//   state.data
// );

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        data: action.movies,
        isLoading: true,
      };
    case PROMESSE_RESOLUE:
      return {
        ...state,
        isLoading: false,
      };
    case SELECTED_CATEGORY:
      return {
        ...state,
        filtre: action.category,
      };
    case REFRESH_CATEGORY_LIST:
      return {
        ...state,
        filtre: '',
      };
    case UPVOTE:
      return {
        ...state,
        data: state.data.map((movie) => {
          if (movie.id === action.id) {
            return {
              ...movie,
              likes: action.newLikes,
              upvoted: true,
            };
          }
          return movie;
        }),
      };
    case DOWNVOTE:
      return {
        ...state,
        data: state.data.map((movie) => {
          if (movie.id === action.id) {
            return {
              ...movie,
              dislikes: action.newDislikes,
              downvoted: true,
            };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const addMovies = movies => ({
  type: ADD_MOVIES,
  movies,
});
export const promesseResolue = () => ({
  type: PROMESSE_RESOLUE,
});
export const selectedCategory = category => ({
  type: SELECTED_CATEGORY,
  category,
});
export const refreshCategoryList = () => ({
  type: REFRESH_CATEGORY_LIST,
});
export const upVote = (newLikes, id) => ({
  type: UPVOTE,
  newLikes,
  id,
});
export const downVote = (newDislikes, id) => ({
  type: DOWNVOTE,
  newDislikes,
  id,
});

/**
 * Export
 */
export default reducer;
