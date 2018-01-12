import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
//
import HomeComponent from './HomeComponent';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Home"
        />
        <HomeComponent/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pageData: state.pageData
  };
}

export default connect(mapStateToProps, {})(HomeContainer);
