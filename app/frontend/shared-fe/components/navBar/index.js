import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class NavBar extends Component {

  render() {
    const links = [
      {
        path : '/accounting',
        label: 'accounting',
      },
      {
        path : '/calendar',
        label: 'calendar',
      },
      {
        path : '/ecommerce',
        label: 'ecommerce',
      },
      {
        path : '/email',
        label: 'email',
      },
      {
        path : '/files',
        label: 'files',
      },
      {
        path : '/reports',
        label: 'reports',
      },
      {
        path : '/social',
        label: 'social',
      },
      {
        path : '/web',
        label: 'web',
      }
    ];
    //
    return (
      <div className="navBarComponent">
        {links.map((config, index) => {
          return <Link key={index} to={config.path}>{config.label}</Link>;
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

NavBar.propTypes = {};

export default connect(mapStateToProps, {})(NavBar)
