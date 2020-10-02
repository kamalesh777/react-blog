import React, { Component } from "react";
import Axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    postLoaded: null,
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.postLoaded ||
        this.state.postLoaded.id !== this.props.id
      ) {
        Axios.get(
          "/posts/" + this.props.id
        ).then((response) => {
          this.setState({ postLoaded: response.data });
        });
      }
    }
  }

  delete = (id) => {
    Axios.delete("/posts/" + this.props.id)
    .then((response) => {
      console.log(response);
    });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading....</p>;
    }
    if (this.state.postLoaded) {
      post = (
        <div className="FullPost">
          <h1>{this.state.postLoaded.title}</h1>
          <p>{this.state.postLoaded.body}</p>
          <div className="Edit">
            <button
              className="Delete"
              onClick={() => this.delete(this.state.postLoaded.id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
