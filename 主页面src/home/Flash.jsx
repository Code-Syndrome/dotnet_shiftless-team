import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Flash extends Component {
  render() {
    return (
      <div>
        <fieldset><h2 style={{textAlign:"center"}}>热点</h2></fieldset>
        <fieldset>
          <ul>
            <li>震惊XXXXX
            </li>
          </ul>
          <ul>
            <li>震惊XXXXX
            </li>
          </ul>
          <ul>
            <li>震惊XXXXX
            </li>
          </ul>
        </fieldset>
       <a href = "http://localhost:3000">BACK</a>
      </div>
    )
  }
}



