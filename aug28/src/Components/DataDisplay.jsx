import React, { Component } from 'react'
import info from "./TheData"
export default class DataDisplay extends Component {

    render() {
        console.log(info)
        return (
            <div className='DataDisplay'>
            <h1 className='counter'>{info[this.props.data.index].id}/25</h1>
            <h1 className='underline'>{info[this.props.data.index].name.first} {info[this.props.data.index].name.last}</h1>
            <p><b>From:</b> {info[this.props.data.index].city}</p>

            <p><b>Job Title:</b> {info[this.props.data.index].title}</p>

            <p><b>Employer:</b> {info[this.props.data.index].employer}</p>

            <b> Favorite Movies:</b>
            <ol className='list'>{info[this.props.data.index].favoriteMovies.map(el=> (<li>{el}</li>))}</ol>
            </div>
            )
    }

}