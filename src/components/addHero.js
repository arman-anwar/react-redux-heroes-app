import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addHero } from "../actions/heroesAction";

class AddHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const post = {
      name: this.refs.heroname.value
    };
    //    console.log(post);

    this.props.addHero(post);

    // return false;
  };

  render() {
    return (
      <div>
        <h2> Add Hero </h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="heroname"
            placeholder="hero name"
            ref="heroname"
          />
          &nbsp;&nbsp;&nbsp;
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

AddHero.propTypes = {
  addHero: PropTypes.func.isRequired
  //  posts: PropTypes.array.isRequired
};

export default connect(
  null,
  { addHero }
)(AddHero);
