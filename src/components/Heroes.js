import React from "react";
import { connect } from "react-redux";
import { fetchHeroes, delHero } from "../actions/heroesAction";
import { addNav } from "../actions/navAction";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class Heroes extends React.Component {
  componentWillMount() {
    //    console.log("Heroes componentWillMount");
    this.props.dispatch(fetchHeroes());
    this.props.dispatch(addNav("/heroes"));
  }

  handleDelete = heroId => {
    //  console.log("handleDelete >> ", heroId);
    this.props.dispatch(delHero(heroId));
    //  this.props.dispatch(fetchHeroes());
  };

  render() {
    //    console.log("heroes", this.props.heroes);
    const postItems = this.props.heroes.map(post => (
      <li key={post.id}>
        <NavLink
          className="nav-item nav-link"
          exact
          activeClassName="active"
          to={"/heroes/detail/" + post.id}
        >
          <span className="badge">{post.id}</span> {post.name}
        </NavLink>
        <i
          className="fa fa-trash-o"
          aria-hidden="true"
          onClick={() => this.handleDelete(post.id)}
        />
      </li>
    ));
    return (
      <div className="container">
        <h3> My Heroes</h3>
        <ul className="heroes">{postItems}</ul>
      </div>
    );
  }
}

Heroes.propTypes = {
  heroes: PropTypes.array.isRequired,
  newHero: PropTypes.object
};

const mapStateToProps = state => ({
  heroes: state.heroes.items,
  newHero: state.heroes.item
});

export default connect(mapStateToProps)(Heroes);
