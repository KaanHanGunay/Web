import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: '97b25d33de6d4c9889fdd0216b924b1c'
 });

const particleOptions = { 
  particles: {  
    number: {
      value: 100,
      density: {
        enable: true,
        value_are: 800
      }
    }
  } 
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = (event) => {
    console.log('ee');
    app.models.predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg")
      .then(
        function(response) {
          console.log(response)
        },
        function(err) {
          // there was an error
        }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={ particleOptions }/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
