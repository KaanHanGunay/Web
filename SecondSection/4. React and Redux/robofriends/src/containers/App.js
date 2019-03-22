import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import { robots } from '../robots';
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchField: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
