import React, { Component } from "react";
import { SiteContainer } from "components";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

import "styles/index.css";

class Layout extends Component {
  state = {
    showSideMenu: false,
  };

  showMenu = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  };

  render() {
    const { children } = this.props;
    const status = this.state.showSideMenu ? "open" : "closed";

    return (
      <SiteContainer>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </SiteContainer>
    );
  }
}

export default Layout;
