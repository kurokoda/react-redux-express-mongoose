import React, {Component} from 'react';
import ComponentOne from './components/Component_01';
import ComponentTwo from './components/Component_02';
import ComponentThree from './components/Component_03';
//
class CalendarComponent extends Component {

  render() {
    return (
      <div className="calendarComponent page">
        <span>Accounting</span>
        <ComponentOne/>
        <ComponentTwo/>
        <ComponentThree/>
      </div>
    );
  }
}

CalendarComponent.propTypes = {};

export default CalendarComponent