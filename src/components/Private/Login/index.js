import React, { Component } from "react";
import { navigate } from "gatsby";
import styles from "./styles.module.css";
import Modal from "react-responsive-modal";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    message: "Enter your email address and password please",
    invalid: false
  };

  handleUsername = event => this.setState({ username: event.target.value });
  handlePassword = event => this.setState({ password: event.target.value });
  handleSubmit = event => {
    event.preventDefault();

    const status = this.props.handleLogin(this.state);

    let { message, invalid } = this.state;
    if (status.error) {
      message = status.message;
      invalid = true;
      return this.setState({ username: "", password: "", message, invalid });
    }

    navigate(this.props.private);
  };

  render() {
    const style = this.state.invalid
      ? { color: "var(--color-gold, red)" }
      : { color: "var(--color-gatsby)" };

    return (
      <form className={styles.LoginForm} onSubmit={this.handleSubmit}>
        <label style={style}>{this.state.message}</label>

        <input
          autoFocus
          type="text"
          className={styles.LoginForm__input}
          placeholder="Email address"
          onChange={this.handleUsername}
          value={this.state.username}
        />

        <input
          type="password"
          className={styles.LoginForm__input}
          placeholder="Password"
          onChange={this.handlePassword}
          value={this.state.password}
        />

        <input
          type="submit"
          className={styles.LoginForm__button}
          value={"Login"}
        />
        <label>
          Or you can register by clicking on this{" "}
          <a id="link-to-registration" href="/register">
            {" "}
            link{" "}
          </a>{" "}
        </label>
      </form>
    );
  }
}

export default LoginForm;
