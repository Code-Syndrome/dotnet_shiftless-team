import React, { Component } from 'react'

export default class Commentlist extends Component {
constructor(props){
  super(props);
  this.state={
    id:''
  }
}

  render() {
    return (
      <div>
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
