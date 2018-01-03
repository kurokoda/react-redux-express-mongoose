import HomeContainer from 'frontend/pages/home/containers/HomeContainer';
import LoginContainer from 'frontend/pages/login/containers/LoginContainer';
import QuestionContainer from 'frontend/pages/question/containers/QuestionContainer';

import QuestionsContainer from 'frontend/pages/questions/containers/QuestionsContainer';
import App from 'frontend/shared-fe/containers/App';
import React from 'react';
import {IndexRoute, Route, Router} from 'react-router';

export default function (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="login" component={LoginContainer}/>
        <Route path="logout" component={LoginContainer}/>
        <Route path="signup" component={LoginContainer}/>
        <Route path="questions" component={QuestionsContainer}/>
        <Route path="questions/:id" component={QuestionContainer}/>
        <IndexRoute component={HomeContainer}/>
      </Route>
    </Router>
  )
}
