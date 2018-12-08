import React from "react";
import { connect } from "react-redux";
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
    this.props.dispatch(addHero(this.refs.heroname.value));
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

export default connect(null)(AddHero);
