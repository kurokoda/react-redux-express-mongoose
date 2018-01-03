import React, {Component} from 'react';
import {ControlLabel, FieldGroup, FormControl} from 'react-bootstrap';

export class PasswordInput extends Component {
  render() {
    return (
      <div className='form-group'>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type='password'
          value={this.props.value}
          className={'form-control ' + this.props.className}
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}/>
        <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className='text'>{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}

export class TextInput extends Component {
  render() {
    return (
      <div className='form-group'>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type='text'
          value={this.props.value}
          className={'form-control ' + this.props.className}
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
        <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className='text'>{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}

export class EmailInput extends Component {
  render() {
    return (
      <div className='form-group'>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type='email'
          value={this.props.value}
          className={'form-control ' + this.props.className}
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
        <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className='text'>{this.props.errorText}</span>
        </div>
      </div>
    );
  }
}
