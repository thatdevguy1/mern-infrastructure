import React, { Component } from "react";
import { signUp } from "../../utilities/users-service";

export class SignUpForm extends Component {
  state = {
    name: "Bob",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;

      //signUp from users-service.js
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch (err) {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

export default SignUpForm;
