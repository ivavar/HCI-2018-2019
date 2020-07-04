import React from "react";
import SEO from "components/SEO";
import { PrivateRoute } from "components";
import { Router } from "@reach/router";
import Login from "components/Private/Login";
import Dashboard from "components/Private/pages/Dashboard.js";
import Personal from "components/Private/pages/Personal.js";
import {
  handleLogin,
  handleLogout,
  isLoggedIn
} from "services/authentication/auth.js";
import { navigate } from "gatsby";
import styles from "components/Private/Login/styles.module.css";
import Layout from "components/Layout";

export default () => (
  <>
    <Layout>
      <form className={styles.LoginForm}>
        <label>Enter your data:</label>

        <input
          autoFocus
          type="text"
          className={styles.LoginForm__input}
          placeholder="Name"
        />

        <input
          type="text"
          className={styles.LoginForm__input}
          placeholder="Surname"
        />
        <input
          type="text"
          className={styles.LoginForm__input}
          placeholder="Email address"
        />
        <input
          type="password"
          className={styles.LoginForm__input}
          placeholder="Password"
        />
        <input
          type="password"
          className={styles.LoginForm__input}
          placeholder="Enter yuur password again"
        />

        <input
          type="submit"
          className={styles.LoginForm__button}
          value={"Create an account"}
        />
        <label />
      </form>
    </Layout>
  </>
);
