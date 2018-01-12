import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {connect} from 'react-redux';
//
import {updateIsLoading} from '../../../actions/application';

class Loading extends Component {
  componentDidMount() {
    this.props.updateIsLoading(true);
  }

  componentWillUnmount() {
    this.props.updateIsLoading(false);
  }

  render() {
    return (
      <div className='loadingComponent'>Loading...</div>
    );
  }

  propTypes = {
    'pageData'       : ImmutablePropTypes.map,
    //
    'updateIsLoading': PropTypes.func,
  };
}

function mapStateToProps(state) {
  return {
    application: state.application
  };
}

export default connect(mapStateToProps, {
  updateIsLoading,
})(Loading);
