import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import style from './Home.modules.css'

//width:'1500px',height:'150px'
export default class Home extends Component {
  render() {
    return (
      <div style={style.Home} className='all'>
        
        <fieldset style={style.Home} className='Head'>
        <h3>讯飞头条</h3>
        <input type='text' id='usename' style={{width:'200px',height:'20px'}}></input>
        <button htmlfor='username' style={{width:'50px',height:'25px'}}>搜索</button>
        <a><Link to='/login'>登录</Link></a>
        </fieldset>
      
        <fieldset style={style.Home} className='ListPage'>
            <div style={style.Home} className='Nav'>
            <ul>
                <li>
                <Link to='./home'>首页</Link>
                </li>
                
                <li>
                <Link to='./home'>热点</Link>
                </li>
               
                <li>
                <Link to='./home'>娱乐</Link>
                </li>


                <li>
                <Link to='./home'>科技</Link>
                </li>

                <li>
                <Link to='./home'>游戏</Link>
                </li>
             </ul>
          </div>
          <div>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>1</li>
           <li>2</li>   
           </div>
        </fieldset>
        <div style={style.Home} className='Other'>
          <fieldset style={{height:'500px'}}></fieldset>
        </div>
      </div>
      
    )
  }
}
