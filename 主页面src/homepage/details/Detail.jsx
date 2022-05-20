import { useParams, Link } from 'react-router-dom'
import news from './newsContent'
import React from 'react'
import Commentlist from './Commentlist';
import Postcomment from './Postcomment';
import style from './Detail.modules.css'

export default function Detail() {

  const { id } = useParams();
  const post = news[id];

  return (
    <div style={style.Detail} className='detail'>
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
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      </fieldset>
      <fieldset style={style.Detail} className='post'>
        <div>
          <Postcomment />  {/*写评论以及提交*/}
        </div>
      </fieldset>
      <fieldset style={style.Detail} className='list'>
        <div>
          <Commentlist />  {/*评论列表*/}
        </div>
      </fieldset>
      <a href = "http://localhost:3000">BACK</a>
      <div style={style.Detail} className='other'>
        <fieldset>
          <Link to="/flash">热点</Link>
        </fieldset>
      </div>
    </div>
  )
}


