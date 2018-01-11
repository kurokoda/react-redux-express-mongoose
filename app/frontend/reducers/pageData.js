import Immutable from 'immutable';
//
import * as ActionType from '../actions/pageData';

let defaultState = Immutable.fromJS(null);

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionType.PAGE_DATA_FETCH_SUCCESS:
      return Immutable.fromJS(action.response);
    case ActionType.PAGE_DATA_FETCH_FAILURE:
      return state;
    case ActionType.PAGE_DATA_PURGE:
      return null;
    default:
      return state
  }
}