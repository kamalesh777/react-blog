import React, { Component, Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Posts from "../Post/Post";
import NewPost from "../NewPost/NewPost";
// import FullPost from "../Post/Post";

import "./Header.css";

class Header extends Component {
  render() {
    // console.log(withRouter(<Posts />))
    return (
      <Fragment>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/post">Posts</Link>
            </li> */}
            <li>
              <Link to="/new-post">New Post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Posts}>
          </Route>
          <Route path="/new-post" exact component={NewPost}>
          </Route>
          {/* <Route path="/post">
            <FullPost />
          </Route> */}
        </Switch>
      </Fragment>
    );
  }
}

export default Header;
