import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class CalendarComponent extends Component {

  render() {
    return (
      <div className="calendarComponent">Calendar</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

CalendarComponent.propTypes = {};

export {CalendarComponent}
export default connect(mapStateToProps)(CalendarComponent)