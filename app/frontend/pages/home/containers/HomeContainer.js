import {login} from 'frontend/actions/auth';
import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div className="intro">
        <Helmet
          title="Intro"
        />
        <h1>Intro Page</h1>
        <div>
          <img src="/assets/images/head.png"/>
          <button onClick={this.onClick}>HELLO</button>
        </div>
        <Link to="/questions">to question</Link>
      </div>
    )
  }

  onClick() {
    const username = 'foo';
    const password = 'dammit';
    //
    this.props.login(username, password)
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps, {login})(HomeContainer)
