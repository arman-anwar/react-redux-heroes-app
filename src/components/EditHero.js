import React from "react";
import { getHero, updateHero } from "../actions/heroesAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addNav, prevNav } from "../actions/navAction";
import ShowNav from "./ShowNav";
import { NavLink } from "react-router-dom";

class EditHero extends React.Component {
  componentWillMount() {
    console.log("componentWillMount", this.props.match.params.id);
    this.props.getHero(this.props.match.params.id);
    this.props.addNav("/heroes/details/" + this.props.match.params.id);
    this.props.prevNav();
  }

  componentWillReceiveProps(nextProps) {
    this.refs.heroname.value = nextProps.hero.name;
  }

  handleSubmit = e => {
    e.preventDefault();
    const hero = {
      id: this.props.hero.id,
      name: this.refs.heroname.value
    };
    this.props.updateHero(hero);
  };

  render() {
    return (
      <div className="container">
        <h2> Edit Hero </h2>

        <form onSubmit={this.handleSubmit}>
          <span> id : {this.props.hero.id} </span>
          <br />
          <span> name : </span>
          <input
            type="text"
            name="heroname"
            placeholder="hero name"
            ref="heroname"
          />
          &nbsp;&nbsp;&nbsp;
          <NavLink
            className="nav-item nav-link"
            exact
            activeClassName="active"
            to={"" + this.props.prevLink}
          >
            Back
          </NavLink>
          <button type="submit"> Save </button>
        </form>
        <ShowNav />
      </div>
    );
  }
}

EditHero.propTypes = {
  id: PropTypes.number,
  prevLink: PropTypes.string,
  hero: PropTypes.object,
  getHero: PropTypes.func.isRequired,
  updateHero: PropTypes.func.isRequired,
  addNav: PropTypes.func.isRequired,
  prevNav: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  hero: state.heroes.item,
  prevLink: state.nav.item
});

export default connect(
  mapStateToProps,
  { getHero, updateHero, addNav, prevNav }
)(EditHero);
