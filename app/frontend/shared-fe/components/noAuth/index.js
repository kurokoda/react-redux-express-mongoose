import React, {Component} from 'react';

class NoAuth extends Component {
  render() {
    return (
      <div className='noAuthComponent'>
        <div className='textContainer'>
          <span>You Are Not Authorized</span>
        </div>
      </div>
    )
  }
}

export default NoAuth
