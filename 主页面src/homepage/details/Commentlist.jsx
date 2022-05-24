import React, { Component } from 'react'
import style from './Commentlist.modules.css'

export default class Commentlist extends Component {
  constructor() {
    super();
    this.state = {
      id: ''
    }
    
    

  }

  render() {
    if(sessionStorage.getItem("CommentsItem")!== null){
      this.array=JSON.parse(sessionStorage.getItem("CommentsItem"));
    }else{
      this.array = [];
    }
    return (
      <div style={style.Commentlist} className='comment'>
        <h2>评论列表</h2>
        <ul >
          {
            this.array.map((comment) => (
              <li key={comment.id} >
                <li>{comment.body}</li>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
