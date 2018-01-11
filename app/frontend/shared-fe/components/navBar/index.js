import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.onLinkClick = ::this.onLinkClick;
    this.state       = {};
  }

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
          return <Link key={index} onClick={this.onLinkClick} to={config.path}>{config.label}</Link>;
        })}
      </div>
    )
  }

  onLinkClick(event) {
    const isLoading = this.props.application.get('isLoading');
    //
    isLoading && event.preventDefault()
  }
}

function mapStateToProps(state) {
  return {
    application: state.application
  }
}

NavBar.propTypes = {};

export default connect(mapStateToProps, {})(NavBar)
