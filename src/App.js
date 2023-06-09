import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import { useState } from 'react';
import React, { Component } from 'react';
//import ParticlesBg from 'particles-bg';

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        type: 'inside',
        color: '#3CA9D1',
        blur: 5
      }
    }
  }
}

class App extends Component{
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }
 

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
  onButtonSubmit = () => {
    console.log('click');
  }

  render(){
    return (
      <div className="App">

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
      </div>
    );
}
}

export default App;
