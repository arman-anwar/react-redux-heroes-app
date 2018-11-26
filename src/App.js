import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/common/Dashboard";
import createBrowserHistory from "history/createBrowserHistory";
import HeaderNavContainer from "./components/HeaderNavContainer"; // eslint-disable-line import/no-named-as-default

import "./App.css";
import ListHeroes from "./components/ListHeroes";
import EditHero from "./components/EditHero";

const history = createBrowserHistory();

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log("sss", this.props.location);
    if (nextProps.location !== this.props.location) {
      // navigated!
    }
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <div className="container text-muted">
              <h2> Tour of Heroes</h2>
            </div>
            <HeaderNavContainer />

            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/heroes" component={ListHeroes} />
              <Route path="/heroes/detail/:id" component={EditHero} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
