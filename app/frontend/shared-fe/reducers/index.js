import {combineReducers} from 'redux';
//
import application from '../../reducers/application';
import auth from '../../reducers/auth';
import pageData from '../../reducers/pageData';

const rootReducer = combineReducers({
  application,
  auth,
  pageData
});

export default rootReducer
