import React, {Component} from 'react';
import ComponentOne from './components/Component_01';
import ComponentTwo from './components/Component_02';
import ComponentThree from './components/Component_03';
//
class SocialComponent extends Component {
  render() {
    return (
      <div className="socialComponent page">
        <span>Accounting</span>
        <ComponentOne/>
        <ComponentTwo/>
        <ComponentThree/>
      </div>
    );
  }
}

SocialComponent.propTypes = {};

export default SocialComponent;
