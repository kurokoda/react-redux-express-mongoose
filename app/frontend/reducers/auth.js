import Immutable from 'immutable';
//
import * as ActionType from '../actions/auth';

let defaultState = Immutable.fromJS({});

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return state.merge(action.response);
    case ActionType.LOGOUT_SUCCESS:
      return state.merge(action.response);
    default:
      return state;
  }
}
