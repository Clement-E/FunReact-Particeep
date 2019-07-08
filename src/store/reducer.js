/**
 * Initial State
 */
const initialState = {
  data: [], // les films en BdD
  isLoading: true, // loader
  categories: [], // recense les différentes catégories
  filtre: '', // le filtre en cours
  pagination: [4, 8, 12], // les chiffres a afficher dans la pagination
  moviesPerPage: 12, // le nombre de films à afficher par page selectionné par l'utilisateur
  currentPage: 1, // numéro de la page affiché
  offset: 4, // constante: nombre de films par page
  showNavBtn: false,
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
export const REMOVE_CARD = 'REMOVE_CARD';
export const MOVIES_PER_PAGE = 'MOVIES_PER_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';

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
        currentPage: 1, // reviens à la première page lorsque change de filtre
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
    case REMOVE_CARD:
      return {
        ...state,
        data: state.data.filter(movie => movie.id !== action.id),
      };
    case MOVIES_PER_PAGE:
      return {
        ...state,
        moviesPerPage: action.number,
      };
    case PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
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
export const removeCard = id => ({
  type: REMOVE_CARD,
  id,
});
export const moviesPerPage = number => ({
  type: MOVIES_PER_PAGE,
  number,
});
export const previousPage = () => ({
  type: PREVIOUS_PAGE,
});
export const nextPage = () => ({
  type: NEXT_PAGE,
});

/**
 * Export
 */
export default reducer;
