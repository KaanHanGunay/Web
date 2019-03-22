import React, { Component } from 'react';
import Card from './Card';

export default class CardList extends Component {
  render() {
    const { robots } = this.props;
    const cardArray = robots.map((user, i) => {
      return <Card key={i} id={user.id} name={user.name} email={user.email} />
    })
    return (
      <div>
        { cardArray }
      </div>
    )
  }
}
