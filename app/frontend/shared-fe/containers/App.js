import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
//
import DevTools from '../../shared-fe/components/dev/DevTools';
import Header from '../../shared-fe/components/header';
import NavBar from '../../shared-fe/components/navBar';
import NoAuth from '../../shared-fe/components/noAuth';

const isProduction = process.env.NODE_ENV === 'production';

class App extends Component {
  render() {
    const loggedIn = this.props.auth.get('user');
    //
    return (
      <div>
        <Helmet
          defaultTitle="Redux real-world example"
          titleTemplate="%s - Redux real-world example"
          meta={[
            {"name": "description", "content": "A boilerplate doing universal/isomorphic rendering with Redux + React-router + Express"},
          ]}
          htmlAttributes={{"lang": "en"}}
        />
        <Header/>
        <div className="app-container">
          <NavBar/>
          {!loggedIn &&
          <NoAuth/>
          }
          {loggedIn &&
          <div className="page-container">
            {this.props.children}
          </div>
          }
        </div>
        {!isProduction && <DevTools />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App)
