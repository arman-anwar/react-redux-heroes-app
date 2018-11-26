import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ShowNav extends React.Component {
  render() {
    const postItems = this.props.nav.map(post => (
      <li>
        <span>{post}</span>
      </li>
    ));
    return (
      <div className="container">
        &nbsp;
        <br />
        <h3> Navigation History</h3>
        <div>{postItems}</div>
      </div>
    );
  }
}

ShowNav.propTypes = {
  nav: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav.items
});

export default connect(
  mapStateToProps,
  {}
)(ShowNav);
