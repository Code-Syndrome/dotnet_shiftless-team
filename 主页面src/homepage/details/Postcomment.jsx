import React, { Component } from 'react'
import comments from './comments';

export default class Postcomment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CommentContent: "",
    };
    console.log(props);
    this.AddCommentContent = this.AddCommentContent.bind(this);
    this.SendContent = this.SendContent.bind(this);
  }

  AddCommentContent(e) {
    const val = e.target.value;
    this.setState({ CommentContent: val });
  }

  AddComment = (comment) => {
    if (this.props.data.length <= 5) {
      this.props.data.push(comment);
      for (let i = 0; i < this.props.data.length; i++) {
        this.props.data[i].id = i;
      }
      sessionStorage.setItem("CommentsItem", comments);
    }
    this.onChangeStateSend = this.props.onChangeState;
    this.onChangeStateSend();
  };

  onChangeStateSend() { };

  SendContent() {
    let CommentNew = {
      id: 0,
      body: this.state.CommentContent,

    };
    this.setState({ CommentContent: "" });
    this.AddComment(CommentNew);
  }

  render() {
    return (
      <div>
        <textarea type='text' className='comment'
          onChange={this.AddCommentContent}
          value={this.state.CommentContent}>
        </textarea>
        <button value='Submit' onClick={this.SendContent}>评论</button>
      </div>
    )
  }
}
