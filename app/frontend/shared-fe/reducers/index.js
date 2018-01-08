import {combineReducers} from 'redux';
//
import auth from '../../reducers/auth';
import question from '../../reducers/question';
import questions from '../../reducers/questions';

const rootReducer = combineReducers({
  auth,
  questions,
  question
});

export default rootReducer
