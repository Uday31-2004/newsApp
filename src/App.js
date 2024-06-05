import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';

export default class extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <News/>
      </>
    )
  }
}
