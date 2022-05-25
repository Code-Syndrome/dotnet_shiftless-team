import React, { Component } from 'react'
import NewsList from './NewsList'
import style from './details/Detail.modules.css'

export default class Flash extends Component {
  render() {
    return (
      <div>
        <fieldset><h2 style={{ textAlign: "center" }}>热点</h2></fieldset>
        <fieldset>
          <NewsList data={1} />
        </fieldset>
        <a href="http://localhost:3000"><button style={style.Flash} className='gohome'>返回首页</button></a>
      </div>
    )
  }
}



