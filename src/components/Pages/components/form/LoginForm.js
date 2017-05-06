/**
 * Form.js
 *
 */

import React, { Component } from 'react';
import FormLabel from './FormLabel';
import styles from './form.scss';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e, message) => {
    e.preventDefault();
    const formData = {
      formUsername: this.state.username,
      formPassword: this.state.password,
    };

    if (formData.formUsername.length < 1 || formData.formPassword.length < 1) {
      return false;
    }

// Dispatch action SET_AUTHs
    console.log('dispatching action to set auth');
//  Then, Clear form
    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    return (
      <form className={styles.reactForm} onSubmit={this.handleSubmit}>
        <h1>Login Form</h1>

        <fieldset className="form-group">
          <FormLabel htmlFor="formUsername" title="Full Name:" />

          <input
            id="formUsername"
            className="form-input"
            name="username"
            type="text"
            required
            onChange={this.handleChange}
            value={this.state.username}
          />
        </fieldset>

        <fieldset className="form-group">
          <FormLabel htmlFor="formPassword" title="Password:" />

          <input
            id="formPassword"
            className="form-input"
            name="password"
            type="text"
            required
            onChange={this.handleChange}
            value={this.state.password}
          />
        </fieldset>

        <div className="form-group">
          <input id="formButton" className={styles.btn} type="submit" placeholder="Log In" />
        </div>
      </form>
    );
  }
}

export default LoginForm;