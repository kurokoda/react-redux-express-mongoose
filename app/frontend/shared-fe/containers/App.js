import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
//
import DevTools from '../../shared-fe/components/dev/DevTools';
import Footer from '../../shared-fe/components/footer';
import Header from '../../shared-fe/components/header';
import NavBar from '../../shared-fe/components/navBar';


const isProduction = process.env.NODE_ENV === 'production';

class App extends Component {
  render() {
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
        <NavBar/>
        <div className="content">
          {this.props.children}
        </div>
        <Footer/>
        {!isProduction && <DevTools />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
