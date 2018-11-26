import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderNavContainer = ({ apiCallsInProgress }) => {
  return (
    <nav className="navbar navbar-toggleable-sm navbar-inverse">
      <div className="container">
        <div className="row">
          <NavLink
            className="nav-item nav-link"
            exact
            activeClassName="active"
            to="/"
          >
            Dashboard
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            activeClassName="active"
            to="/heroes"
          >
            Heroes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavContainer;
