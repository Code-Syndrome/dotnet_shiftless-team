import { useParams } from 'react'
import posts from './newsContent'
import React from 'react'
import Commentlist from './Commentlist';
import Postcomment from './Postcomment';
import style from './Detail.modules.css'

export default function Detail() {
  const { id } = useParams();
  const post = posts[id];
  return (
    <div style={style.Detail} className='detail'>
      <fieldset style={style.Detail} className='nav'>
        <ul>
          <li>导航</li>
          <li>娱乐</li>
          <li>游戏</li>
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

      <div style={style.Detail} className='other'>其他</div>

    </div>
  )
}


