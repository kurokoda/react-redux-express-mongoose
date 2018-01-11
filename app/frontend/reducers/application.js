import Immutable from 'immutable';
//
import * as ActionType from '../actions/application';

let defaultState = Immutable.fromJS({});

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionType.LOADING_IS_TRUE:
      return state.merge(action.payload);
    case ActionType.LOADING_IS_FALSE:
      return state.merge(action.payload);
    default:
      return state
  }
}