import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPosts } from "../actions/postAction";
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.refs.title.value,
      body: this.refs.body.value
    };
    console.log(post);

    this.props.createPosts(post);

    // return false;
  };

  render(e) {
    return (
      <div>
        <h2> Add posts </h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="title" ref="title" />
          <br />
          <textarea name="body" placeholder="body" ref="body" />
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPosts: PropTypes.func.isRequired
  //  posts: PropTypes.array.isRequired
};

export default connect(
  null,
  { createPosts }
)(PostForm);
