import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import style from './Home.modules.css'
import Detail from './details/Detail'
import posts from './details/newsContent'
import Technology from './Technology'
import Game from './Game'
import Entertainment from './Entertainment'
import Flash from './Flash'

//width:'1500px',height:'150px'
export default class Home extends Component {
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
            <Routes>
              <Route path='./Flash' element={<Flash />} />
              <Route path='./Entertainment' element={<Entertainment />} />
              <Route path='./Technology' element={<Technology />} />
              <Route path='./Game' element={<Game />} />
            </Routes>
          </div>
          <div>
            <ul>
              {
                posts.map((val, index) => (
                  <li key={index}>
                    <Link to={`./details/Detail/${index}`} target='_blank'>{val.title}</Link>
                  </li>
                ))
              }
            </ul>

            <Routes>
              <Route path="./Detail/:id" element={<Detail />} />
            </Routes>

          </div>
        </fieldset>
        <div style={style.Home} className='Other'>
          <fieldset style={{ height: '500px' }}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </fieldset>
        </div>
      </div>

    )
  }
}
