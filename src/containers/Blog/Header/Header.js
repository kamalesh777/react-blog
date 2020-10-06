import React, { Component, Fragment } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Posts from "../Post/Post";
import NewPost from "../NewPost/NewPost";
import FullPost from "../FullPost/FullPost";

import "./Header.css";

class Header extends Component {
  render() {
    // console.log(withRouter(<Posts />))
    return (
      <Fragment>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="navActive">Posts</NavLink>
            </li>
            <li>
              <NavLink to="/new-post" exact activeClassName="navActive">New Post</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/new-post" exact component={NewPost}>
          </Route>
          <Route path="/post" component={Posts}>
          </Route>
          <Route path="/" component={Posts}>
          </Route>
          
          {/* <Route path="/post/:id" exact component={FullPost}>
          </Route> */}
        </Switch>
      </Fragment>
    );
  }
}

export default Header;
