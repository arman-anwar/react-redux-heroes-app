import React from "react";
import AddHero from "./addHero";
import Heroes from "./Heroes";
import ShowNav from "./ShowNav";

class ListHeroes extends React.Component {
  render() {
    return (
      <div className="container">
        <AddHero />
        <Heroes />
        <ShowNav />
      </div>
    );
  }
}

export default ListHeroes;
