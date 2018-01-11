import React, {Component} from 'react';
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
    )
  }
}

function mapStateToProps(state) {
  return {
    application: state.application
  }
}

export default connect(mapStateToProps, {
  updateIsLoading,
})(Loading)