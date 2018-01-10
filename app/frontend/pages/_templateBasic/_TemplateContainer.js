import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import TemplateComponent from './_TemplateComponent';

class TemplateContainer extends Component {

  render() {
    const componentProps = {}
    return (
      <div className="templateContainer">
        <Helmet
          title={'Template'}
        />
        <TemplateComponent {...componentProps}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

TemplateContainer.propTypes = {};

export {TemplateContainer}
export default connect(mapStateToProps, {})(TemplateContainer)
