import React from 'react';
import {IndexRoute, Route, Router} from 'react-router';
//
import HomeContainer from '../../pages/home/containers/HomeContainer';
import LoginContainer from '../../pages/login/containers/LoginContainer';
import QuestionContainer from '../../pages/question/containers/QuestionContainer';
import QuestionsContainer from '../../pages/questions/containers/QuestionsContainer';
import SignupContainer from '../../pages/signup/containers/SignupContainer';
import App from '../../shared-fe/containers/App';

export default function (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="login" component={LoginContainer}/>
        <Route path="logout" component={LoginContainer}/>
        <Route path="signup" component={SignupContainer}/>
        <Route path="questions" component={QuestionsContainer}/>
        <Route path="questions/:id" component={QuestionContainer}/>
        <IndexRoute component={HomeContainer}/>
      </Route>
    </Router>
  )
}
