import React, { Component } from 'react'
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    const { news } = this.props;
    const elements = news.map(n => <NewsItem key = {n.id} title = {n.title} description = {n.description}/>);
    return (
      <div>
        { elements }
      </div>
    )
  }
}
