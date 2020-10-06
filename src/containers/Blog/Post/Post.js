import React, { Component, Fragment } from "react";
import "./Post.css";
import Posts from "../../../components/Posts/Posts";
import Axios from "axios";
import {Route} from 'react-router-dom';
import FullPost from "../FullPost/FullPost";

class Post extends Component {
  state = {
    posts: [],
    // selectedPostId: null
  };

  componentDidMount() {
    Axios.get("/posts").then((response) => {
      let post = response.data.slice(0, 6);
      let updatePost = post.map((p) => {
        return {
          ...p,
          author: "Kamalesh",
        };
      });
      this.setState({ posts: updatePost });
      // console.log(this.state.posts)
    });
  }

  showFull = (id) => {
    
      this.props.history.push({pathname: '/post/'+ id})
  };

  render() {
    let post = this.state.posts.map((p) => {
      return (
        // <Link to={"post/" + p.id} className="Post">
          <Posts
            title={p.title}
            key={p.id}
            author={p.author}
            clicked={() => this.showFull(p.id)}
          />
        // </Link>
      );
    });

    return (
        <Fragment>
            <div className="PostsFlex">
                {post}
            </div>
            <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
        </Fragment>
    )
  }
}

export default Post;
