import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const { id, name, email } = this.props;
    return (
      <div className="tc bg-ligh-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${ id }?200x200`} alt="Robots"/>
        <div>
          <h2>{ name }</h2>
          <p>{ email }</p>
        </div>
      </div>
    )
  }
}
