import React, { Component } from 'react'
import style from './Commentlist.modules.css'

export default class Commentlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }

  render() {
    return (
      <div style={style.Commentlist} className='comment'>
        <ul >
          {
            this.props.data.map((comment) => (
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
