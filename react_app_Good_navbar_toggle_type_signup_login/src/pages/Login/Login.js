import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let LoggedIn = true;
    if (token == null) {
      LoggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      LoggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitform = this.submitform.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitform(e) {
    e.preventDefault();
    const { username, password } = this.state;

    // login security
    if (username === "admin" && password === "123") {
      localStorage.setItem("token", "rahul123456789");
      this.setState({
        LoggedIn: true,
      });
    }
  }

  render() {
    if (this.state.LoggedIn) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <div class="container card border pt-5 pb-5" style={{ width: "350px" }}>
          <h1 className="text-center">LogIn</h1>
          <form
            className=""
            name="loginform"
            id="loginform"
            action="https://themes.getbootstrap.com/wp-login.php"
            method="post"
            onSubmit={this.submitform}
          >
            <div class="form-group mt-4">
              <label for="user_login">Username</label>
              <input
                type="text"
                name="username"
                id="user_login"
                class="form-control"
                value={this.state.username}
                onChange={this.onChange}
                size="20"
                placeholder="username"
                required
              />
            </div>
            <div class="form-group mt-4">
              <label for="user_pass">Password</label>
              <input
                type="password"
                name="password"
                id="user_pass"
                class="form-control"
                value={this.state.password}
                onChange={this.onChange}
                size="20"
                placeholder="password"
                required
              />
            </div>

            <div class="form-group mt-4">
              <input
                type="submit"
                name="wp-submit"
                id="wp-submit"
                class="btn btn-primary w-100"
                value="Sign In"
              />
            </div>
          </form>
        </div>
        <div
          class="card text-success text-center mt-4"
          style={{ maxWidth: "350px", margin: "0 auto" }}
        >
          username="admin" password="123"
        </div>
      </div>
    );
  }
}
