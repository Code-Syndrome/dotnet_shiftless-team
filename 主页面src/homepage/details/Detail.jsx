import { Link } from 'react-router-dom'
import Commentlist from './Commentlist';
import Postcomment from './Postcomment';
import style from './Detail.modules.css'
import comments from './comments';


import React, { Component } from 'react'
import Newsid from './Newsid';

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      changestate: 1,
    };
    this.ThisDetail();
  }

  ThisDetail = () => {
    console.log("Into ThisDetail");

    console.log(JSON.parse(sessionStorage.getItem("detailid")));
  }

  UpDate() {
    this.setState({ changestate: 1 });
  }


  render() {
    return (
      <div style={style.Detail} className='details'>

        <fieldset style={style.Detail} className='nav'>
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
          </ul>
        </fieldset>

        <fieldset style={style.Detail} className='detail'>
          <Newsid />
        </fieldset>
        <fieldset style={style.Detail} className='post'>
          <div>
            <Postcomment data={comments} Home="1"
              onChangeState={() => this.UpDate()} />
          </div>
        </fieldset>
        <fieldset style={style.Detail} className='list'>
          <div>
            <Commentlist data={comments} />
          </div>
        </fieldset>

        <a href="http://localhost:3000"><button>返回首页</button></a>

      </div>
    )
  }
}
