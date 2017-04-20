/**
 * Form.react.js
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { changeForm } from '../actions/AppActions';
// import { History } from 'react-router';
import LoadingButton from './LoadingButton';

class LoginForm extends Component {
  constructor() {
    super();
    // this.onSubmit = this.onSubmit.bind(this);
    // this.changeUsername = this.changeUsername.bind(this);
    // this.changePassword = this.changePassword.bind(this);
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit.bind(this)}>
        <div className="form__error-wrapper">
          <p className="form__error form__error--username-taken">Sorry, but this username is already taken.</p>
          <p className="form__error form__error--username-not-registered">This username does not exist.</p>
          <p className="form__error form__error--wrong-password">Wrong password.</p>
          <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
          <p className="form__error form__error--failed">Something went wrong, please try again!</p>
        </div>
        <div className="form__field-wrapper">
          <input
            className="form__field-input"
            type="text" id="username"
            value={this.props.data.username}
            placeholder="frank.underwood"
            // onChange={this.changeUsername}
            autoCorrect="off" autoCapitalize="off"
            spellCheck="false"
          />
          <label className="form__field-label" htmlFor="username">Username</label>
        </div>
        <div className="form__field-wrapper">
          <input
            className="form__field-input"
            id="password" type="password"
            value={this.props.data.password}
            placeholder="••••••••••"
            // onChange={this.changePassword}
          />
          <label className="form__field-label" htmlFor="password">Password</label>
        </div>
        <div className="form__submit-btn-wrapper">
          {this.props.currentlySending ? (
            <LoadingButton />
          ) : (
            <button className="form__submit-btn" type="submit">{this.props.btnText}</button>
          )}
        </div>
      </form>
    );
  }

  // Change the username in the app state
  // changeUsername(evt) {
  //   const newState = this._mergeWithCurrentState({
  //     username: evt.target.value,
  //   });

  //   this._emitChange(newState);
  // }

  // Change the password in the app state
  // changePassword(evt) {
  //   const newState = this._mergeWithCurrentState({
  //     password: evt.target.value,
  //   });

  //   this._emitChange(newState);
  // }

  // Merges the current state with a change
  // _mergeWithCurrentState(change) {
  //   return assign(this.props.data, change);
  // }

  // Emits a change of the form state to the application state
  // _emitChange(newState) {
  //   this.props.dispatch(changeForm(newState));
  // }

  // onSubmit call the passed onSubmit function
  // onSubmit(evt) {
  //   evt.preventDefault();
  //   this.props.onSubmit(this.props.data.username, this.props.data.password);
  // }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default LoginForm;
