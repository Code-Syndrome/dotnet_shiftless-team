import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import news from './details/newsContent';
// import Flash from './Flash';
import style from './Home.modules.css'
import NewsList from './NewsList'


export default class Home extends Component {
  constructor() {
    super();
    this.SearchNews = this.SearchNews.bind(this);
    this.SearchTextInput = React.createRef();
  }

  SearchNews() {
    let tosearch = String(this.SearchTextInput.current.value);
    let willval = [];
    news.map((val) => {
      console.log(val);
      if (val.title.indexOf(tosearch) !== -1 ||
        val.content.indexOf(tosearch) !== -1) {
        willval.push(val);
      }
    });
    sessionStorage.getItem("nowval", JSON.stringify(willval));
    window.location.href = ""
  }

  render() {
    console.log(news);
    return (

      <div style={style.Home} className='home'>

        <fieldset style={style.Home} className='Head'>
          <h3>讯飞头条</h3>
          <input type='text'style={style.Home} className='SearchText'></input>
          <button className='SearchButton' style={style.Home} onClick={this.SearchNews} >搜索</button>
        </fieldset>

        <fieldset style={style.Home} className='ListPage'>
          <div style={style.Home} className='Nav'>
            <ul>
              <li>
                <Link to='/flash'>热点</Link>
              </li>

              <li>
                <Link to='/entertainment'>娱乐</Link>
              </li>

              <li>
                <Link to='/technology'>科技</Link>
              </li>

              <li>
                <Link to='/game'>游戏</Link>
              </li>

              <li style={style.Home} className='login'>
                <Link to='/login'>登录</Link>
              </li>

              <li style={style.Home} className='register'>
                <Link to='/register'>注册</Link>
              </li>
            </ul>
          </div>
          <div>
            <NewsList data={news}/>
          </div>
        </fieldset>

       {/*  <div style={style.Home} className='Other'>
          <fieldset style={{ height: '500px' }}>
            
          </fieldset>
        </div>
 */}
      </div>

    )
  }
}
