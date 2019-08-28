import React, { Component } from 'react'

export default class Buttons extends Component{

render() {
    return(
        <div className="theButtons">
        <button className="bstyle" onClick={ ()=>this.props.subtract()}>Previous</button>
        <button className="bstyle" onClick={ ()=>this.props.add()}>Next</button>
        </div>
    )
}

}