import {List} from 'immutable';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Link} from 'react-router';

class QuestionsComponent extends Component {
  render() {
    return (
      <div>
        Questions component
        {
          this.props.questions.map((q) => {
            let id = q.get('id')
            return (
              <div key={id}>
                <Link to={`/questions/${id}`}> { q.get('content') }</Link>
              </div>
            )
          })
        }
        <Link to={`/questions/not-found`}> This link would be redirected to Index</Link>
      </div>
    )
  }
}

QuestionsComponent.propTypes = {
  questions: PropTypes.instanceOf(List).isRequired
}

export default QuestionsComponent
