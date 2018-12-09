import React from "react";
import { connect } from "react-redux";
import { fetchHeroes } from "../actions/heroesAction";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

const clearStyle = {
  clear: "both"
};

class SearchHero extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  getSuggestionValue = suggestion => {
    this.props.history.push("/heroes/detail/" + suggestion.id);
  };

  getSuggestions = value => {
    const inputValue = value.value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.props.heroes.filter(hero =>
          hero.name.toLowerCase().includes(inputValue)
        );
  };

  onSuggestionsFetchRequested = value => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  componentWillMount() {
    this.props.dispatch(fetchHeroes());
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ suggestions: nextProps.heroes });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type hero name",
      value,
      onChange: this.onChange
    };

    const topHeroes = this.props.heroes.slice(0, 4).map(hero => (
      <NavLink
        className="topHeroes"
        to={"heroes/detail/" + hero.id}
        key={hero.id}
      >
        <div>
          <span> {hero.name}</span>
        </div>
      </NavLink>
    ));

    return (
      <div className="container">
        {topHeroes}
        <div style={clearStyle}> &nbsp; </div>
        <h3> Search Heroes</h3>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

SearchHero.propTypes = {
  heroes: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  heroes: state.heroes.items
});

export default connect(mapStateToProps)(withRouter(SearchHero));
