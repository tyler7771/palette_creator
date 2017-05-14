const SessionMiddleware ({ getState, dispatch }) => next => action => ({
  switch(action.type){
    case LOGIN:
      return next(action);
    case SIGNUP:
      return next(action);
    case LOGOUT:
      return next(action);
    default:
      return next(action);
  }
})

export default SessionMiddleware
