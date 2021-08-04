import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Navbar
            <span className="badge rounded-pill bg-secondary m-2">
              {this.props.totalCounters}
            </span>
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
