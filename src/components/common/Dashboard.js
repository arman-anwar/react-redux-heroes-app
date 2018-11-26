import React from "react";
import SearchHero from "../SearchHero";
import ShowNav from "../ShowNav";
import { addNav } from "../../actions/navAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.addNav("/Dashboard");
  }

  render() {
    return (
      <div>
        <SearchHero />
        <ShowNav />
      </div>
    );
  }
}

Dashboard.propTypes = {
  addNav: PropTypes.func.isRequired
};

export default connect(
  null,
  { addNav }
)(Dashboard);
