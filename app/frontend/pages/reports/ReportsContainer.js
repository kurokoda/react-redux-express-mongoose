import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Helmet from 'react-helmet';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
//
import {fetchPageData, purgePageData} from '../../actions/pageData';
import Loading from '../../shared-fe/components/loading';
import ReportsComponent from './ReportsComponent';


class ReportsContainer extends Component {
  constructor(props) {
    super(props);
    this.onFetchPageDataSuccess = ::this.onFetchPageDataSuccess;
    this.onFetchPageDataFailure = ::this.onFetchPageDataFailure;
    this.state                  = {};
  }

  componentDidMount() {
    this.props.fetchPageData('reports', this.onFetchPageDataSuccess, this.onFetchPageDataFailure);
  }

  componentWillUnmount() {
    this.props.purgePageData();
  }

  render() {
    const data = this.props.pageData;
    //
    if (!data) {
      return (
        <Loading/>
      );
    } else {
      return (
        <div>
          <Helmet
            title="Reports"
          />
          <ReportsComponent/>
        </div>
      );
    }
  }

  // Non-React Functions

  onFetchPageDataSuccess() {
    return;
  }

  onFetchPageDataFailure() {
    browserHistory.push('/error');
  }

  propTypes = {
    'pageData'     : ImmutablePropTypes.map,
    //
    'purgePageData': PropTypes.func,
    'fetchPageData': PropTypes.func,
  };
}

function mapStateToProps(state) {
  return {
    pageData: state.pageData
  };
}

export default connect(mapStateToProps, {
  fetchPageData,
  purgePageData
})(ReportsContainer);
