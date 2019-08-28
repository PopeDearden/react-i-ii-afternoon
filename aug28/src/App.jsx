import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import DataDisplay from './Components/DataDisplay.jsx'
import Buttons from './Components/Buttons.jsx'


export default class App extends Component{

  constructor() {
    super();
    
    this.state = {
      index: 0
    }
    this.subtract = this.subtract.bind(this)
    this.add = this.add.bind(this)
}
subtract() {
  this.setState({index:this.state.index -1})
  console.log(this.state.index)
}
add() {
  this.setState({index:this.state.index +1})
  console.log(this.state.index)
}

render() {
  console.log(this.state.index)
  return (
    <div>
      <div className="topbar">
        <h1>Home</h1>
      </div>
      <div className="black">
      <div className="white">
    <DataDisplay data={this.state}/>
    </div>
    <div className="buttons">
    <Buttons add={this.add} subtract={this.subtract} data={this.state}/>

      </div>
      </div>
    
    </div>
  )
}
}