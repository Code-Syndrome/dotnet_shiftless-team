import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './Home.modules.css'
import NewsList from './NewsList'
import newContent from "./details/newsContent"
/* import Detail from './details/Detail'
import Technology from './Technology'
import Game from './Game'
import Entertainment from './Entertainment'
import Flash from './Flash' */


export default class Home extends Component {
  constructor() {
    super();
  }

  SearchNews() {

  }

  render() {
    return (

      <div style={style.Home} className='home'>

        <fieldset style={style.Home} className='Head'>
          <h3>讯飞头条</h3>
          <input type='text' id='usename' style={{ width: '200px', height: '20px' }}></input>
          <button htmlfor='username' style={{ width: '50px', height: '25px' }}>搜索</button>
          <a><Link to='/login'>登录</Link></a>
        </fieldset>

        <fieldset style={style.Home} className='ListPage'>
          <div style={style.Home} className='Nav'>
            <ul>
              <li>
                <Link to='./home'>首页</Link>
              </li>

              <li>
                <Link to='./Flash'>热点</Link>
              </li>

              <li>
                <Link to='./Entertainment'>娱乐</Link>
              </li>

              <li>
                <Link to='./Technology'>科技</Link>
              </li>

              <li>
                <Link to='./Game'>游戏</Link>
              </li>
            </ul>
          </div>
          <div>
            <NewsList />
          </div>
        </fieldset>

        <div style={style.Home} className='Other'>
          <fieldset style={{ height: '500px' }}>
            <Link to="./flash">视频1</Link>
          </fieldset>
        </div>

      </div>

    )
  }
}
