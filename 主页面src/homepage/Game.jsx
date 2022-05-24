import React, { Component } from 'react'
import NewsList from './NewsList'

export default class Game extends Component {
  render() {
    return (
      <div>
        <fieldset><h2 style={{ textAlign: "center" }}>游戏</h2></fieldset>
        <fieldset>
          <NewsList data={4} />
        </fieldset>
        <a href="http://localhost:3000"><button>返回首页</button></a>
      </div>
    )
  }
}



