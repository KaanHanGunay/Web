import React, { Component } from 'react'

export default class SearchBox extends Component {
  render() {
    const { searchChange } = this.props;
    return (
      <div className="pa2">
        <input 
          onChange={searchChange} 
          className="pa3 ba b--green bg-lightest-blue" 
          type="search" 
          name="" 
          id="" 
          placeholder="Search Robots" />
      </div>
    )
  }
}
