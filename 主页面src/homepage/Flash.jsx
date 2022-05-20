import React, { Component } from 'react'
import NewsList from './NewsList'

export default class Flash extends Component {
  render() {
    return (
      <div>
        <fieldset><h2 style={{textAlign:"center"}}>热点</h2></fieldset>
        <fieldset>
          <NewsList/>
        </fieldset>
       <a href = "http://localhost:3000">BACK</a>
      </div>
    )
  }
}



