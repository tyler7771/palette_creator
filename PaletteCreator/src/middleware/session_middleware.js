import { LOGIN, SIGNUP, LOGOUT, receiveCurrentUser, receiveErrors } from '../actions/session_actions.js';
import { signup, logout, login } from '../utils/session_api_utils.js';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type){
    case LOGIN:
      login(action.user).then(response => {
        dispatch(receiveCurrentUser(response.json()));
      })
      .catch(error => {
        dispatch(receiveErrors(error.json()));
      });
      return next(action);
    case SIGNUP:
      signup(action.user).then(response => {
        dispatch(receiveCurrentUser(response.json()));
      })
      .catch(error => {
        dispatch(receiveErrors(error.json()));
      });
      return next(action);
    case LOGOUT:
      logout(action.user).then(response => {
        dispatch(logout());
      });
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
