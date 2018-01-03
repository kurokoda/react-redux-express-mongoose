import {loadQuestionDetail} from 'frontend/actions/questions';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

class QuestionContainer extends Component {
  static fetchData({store, params, history}) {
    let {id} = params;
    return store.dispatch(loadQuestionDetail({id, history}))
  }

  componentDidMount() {
    let {id} = this.props.params;
    this.props.loadQuestionDetail({id, history: browserHistory})
  }

  render() {
    let {question} = this.props;
    return (
      <div>
        <Helmet
          title={'Question ' + this.props.params.id}
        />
        <h2>{ question.get('content') }</h2>
        <h3> User: {question.getIn(['user', 'name'])} </h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {question: state.question}
}

QuestionContainer.propTypes = {
  question: PropTypes.object.isRequired
};

export {QuestionContainer}
export default connect(mapStateToProps, {loadQuestionDetail})(QuestionContainer)
