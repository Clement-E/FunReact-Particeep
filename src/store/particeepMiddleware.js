import movies$ from '../datas/movies';

import {DISCONNECT_USER, USER_VOTE,} from './reducer';
import movies from '../datas/movies';

const particeepMiddleware = store => next => (action) => {
  switch (action.type) {
    case DISCONNECT_USER:
      axios.get(`${polisApi}/logout`, {
        withCredentials: true,
      })
        .then((response) => {
          next(action);
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;

    case USER_VOTE:
      next(action);
      axios.post(`${polisApi}/vote/${action.id}`, {
        vote: action.vote,
      }, {
        withCredentials: true,
      })
        .then(() => {
        })
        .catch((error) => {
          console.log(error.message);
        });
      break;
    default:
      return next(action);
  }
};

export default particeepMiddleware;
