import {PasswordInput, TextInput} from 'frontend/shared-fe/components/inputs';
import Validation from 'frontend/shared-fe/validation';
import {minLength, required} from 'frontend/shared-fe/validation/rules';
import update from 'immutability-helper';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

const fieldValidations = [
  Validation.set('username', 'Username', required, minLength(3)),
  Validation.set('password', 'Password', required)
];

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange     = this.onChange.bind(this);
    this.state        = {
      showErrors      : false,
      validationErrors: {},

      username: '',
      password: '',
    };

    this.state.validationErrors = Validation.run(this.state, fieldValidations);
  }

  getErrorFor(field) {
    return this.state.validationErrors[field];
  }

  onChange(event) {
    event.preventDefault();
    let newState              = update(this.state, {
      [event.target.id]: {$set: event.target.value}
    });
    newState.validationErrors = Validation.run(newState, fieldValidations);
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({showErrors: true});
    if (!_.isEmpty(this.state.validationErrors)) return null;
    this.props.onSubmit(
      {
        username: this.state.username,
        password: this.state.password
      }
    );
  }

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <form onSubmit={this.handleSubmit}>
          <TextInput value={this.state.username}
                     onChange={this.onChange}
                     showError={this.state.showErrors}
                     errorText={this.getErrorFor('username')}
                     label='Username'
                     id='username'/>

          <PasswordInput value={this.state.password}
                         onChange={this.onChange}
                         showError={this.state.showErrors}
                         errorText={this.getErrorFor('password')}
                         label='Password'
                         id='password'/>

          <p>
            <Button
              className="btn-block"
              bsStyle='success'
              type='submit'>
              LOG IN
            </Button>
          </p>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

LoginComponent.propTypes = {};

export {LoginComponent}
export default connect(mapStateToProps)(LoginComponent)