import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
//
import {fetchPageData, purgePageData} from '../../actions/pageData';
import Loading from '../../shared-fe/components/loading';
import FilesComponent from './FilesComponent';


class FilesContainer extends Component {

  constructor(props) {
    super(props);
    this.onFetchPageDataSuccess = ::this.onFetchPageDataSuccess;
    this.onFetchPageDataFailure = ::this.onFetchPageDataFailure;
    this.state                  = {};
  }

  componentDidMount() {
    this.props.fetchPageData('files', this.onFetchPageDataSuccess, this.onFetchPageDataFailure);
  };

  componentWillUnmount() {
    this.props.purgePageData();
  };

  render() {
    const data = this.props.pageData;
    //
    if (!data) {
      return (
        <Loading/>
      )
    } else {
      return (
        <div>
          <Helmet
            title="Files"
          />
          <FilesComponent/>
        </div>
      )
    }
  }

  // Non-React Functions

  onFetchPageDataSuccess() {
    return;
  }

  onFetchPageDataFailure() {
    browserHistory.push('/error');
  }
}

function mapStateToProps(state) {
  return {
    pageData: state.pageData
  }
}

export default connect(mapStateToProps, {
  fetchPageData,
  purgePageData
})(FilesContainer)
