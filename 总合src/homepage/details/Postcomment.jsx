import React, { Component } from 'react'

export default class Postcomment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CommentContent: "",
    };

    this.AddCommentContent = this.AddCommentContent.bind(this);
    this.SendContent = this.SendContent.bind(this);
    this.onChangeStateSend=this.onChangeStateSend.bind(this);
  }

  AddCommentContent(e) {
    const val = e.target.value;
    this.setState({ CommentContent: val });
  }

  AddComment = (comment) => {
    let testarray = [];
    if (sessionStorage.getItem("CommentsItem") !== null) {
      testarray = JSON.parse(sessionStorage.getItem("CommentsItem"));
      if ((JSON.parse(sessionStorage.getItem("CommentsItem"))).length <= 100) {
        testarray.push(comment);
        for (let i = 0; i < testarray.length; i++) {
          testarray[i].id = i;
        }
        sessionStorage.setItem("CommentsItem", JSON.stringify(testarray));
      }
    } else {
      testarray.push(comment);
      for (let i = 0; i < testarray.length; i++) {
        testarray[i].id = i;
      }
      sessionStorage.setItem("CommentsItem", JSON.stringify(testarray));
    }


    
  };

  onChangeStateSend(){ 
    this.props.onChangeState();
  };


  SendContent() {
    let CommentNew = {
      id: 0,
      body: this.state.CommentContent,
    };
    this.AddComment(CommentNew);
    this.onChangeStateSend();
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
