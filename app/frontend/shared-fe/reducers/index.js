import auth from 'frontend/reducers/auth';
import question from 'frontend/reducers/question';
import questions from 'frontend/reducers/questions';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  auth,
  questions,
  question
});

export default rootReducer
