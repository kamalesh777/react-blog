import React, { Component } from "react";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/post">Post</a>
          </li>
          <li>
            <a href="/new-post">New Post</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
