import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  // Hata yakalam (try catch bloğu)
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if(this.state.hasError) {  // hata alırsan bunu göster
      return <h1>Someting goes wrong</h1>
    }
    return this.props.children;  // hata almazsan herşeyi normal göster
  }
}
