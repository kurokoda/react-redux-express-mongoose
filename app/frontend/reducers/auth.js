import * as ActionType from 'frontend/actions/auth';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS({});

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return state.merge(action.response);
    case ActionType.LOGOUT_SUCCESS:
      return state.merge(action.response);
    default:
      return state
  }
}