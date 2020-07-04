import React from "react";
import styles from "./styles.module.css";
import Sticky from "react-sticky-el";
import StickyBox from "react-sticky-box";

export default () => {
  return (
    //<StickyBox>
    <div id="nav">
      <nav id="navbar">
        <a className="a-nav" href="/">
          Home
        </a>
        <a className="a-nav" href="/smjestaj">
          Accommodation
        </a>
        <a className="a-nav" href="/blog">
          Split-Blog
        </a>
      </nav>
      <a className="a-nav" href="/private" id="a-prijava">
        Login
      </a>
    </div>
    //</StickyBox>
  );
};
