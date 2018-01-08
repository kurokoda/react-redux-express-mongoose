import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {Link} from 'react-router';
//
import QuestionsComponent from '../../../pages/questions/components/QuestionsComponent';
import {loadQuestions} from '../../../actions/questions';

class QuestionsContainer extends Component {
  static fetchData({store}) {
    return store.dispatch(loadQuestions())
  }

  componentDidMount() {
    this.props.loadQuestions()
  }

  render() {
    return (
      <div>
        <Helmet
          title="Questions"
        />
        <h2>Question</h2>
        <QuestionsComponent questions={this.props.questions}/>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {questions: state.questions}
}

export {QuestionsContainer}
export default connect(mapStateToProps, {loadQuestions})(QuestionsContainer)
