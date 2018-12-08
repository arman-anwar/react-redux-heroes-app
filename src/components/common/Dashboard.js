import React from "react";
import SearchHero from "../SearchHero";
import ShowNav from "../ShowNav";
import { addNav } from "../../actions/navAction";
import { connect } from "react-redux";
//import PropTypes from "prop-types";

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.dispatch(addNav("/Dashboard"));
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

export default connect(null)(Dashboard);
