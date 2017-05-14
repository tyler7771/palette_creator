import React from 'react';
import merge from 'lodash/merge';

const SessionReducer = (state = {}, action) => {
  
  Object.freeze(state);
  let dup = merge({}, state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      dup.currentUser = action.currentUser;
      dup.errors = [];
      return dup;
    case RECEIVE_ERRORS:
      dup.currentUser = null;
      dup.errors = action.errors;
      return dup;
    case LOGOUT:
      dup.currentUser = null;
      dup.errors = [];
      return dup;
    default:
       return state;
};

export default SessionReducer;
