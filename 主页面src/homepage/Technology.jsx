import React, { Component } from 'react'
import NewsList from './NewsList'

export default class Technology extends Component {
  render() {
    return (
      <div>
        <fieldset><h2 style={{ textAlign: "center" }}>科技</h2></fieldset>
        <fieldset>
          <NewsList data={3} />
        </fieldset>
        <a href="http://localhost:3000"><button>返回首页</button></a>
      </div>
    )
  }
}
