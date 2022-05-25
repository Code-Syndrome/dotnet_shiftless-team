import { Link } from "react-router-dom";
import Commentlist from "./Commentlist";
import Postcomment from "./Postcomment";
import style from "./Detail.modules.css";
import comments from "./comments";

import React, { Component } from "react";
import Newsid from "./Newsid";

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      changestate: 1,
    };
    this.UpDate = this.UpDate.bind(this);
  }
  UpDate() {
    console.log("Update");
    this.setState({ changestate: 1 });
  }

  render() {
    let commentlist;
    if (sessionStorage.getItem("username") !== null) {
      commentlist = <Commentlist />;
    } else {
      commentlist = <div></div>;
    }
    console.log(sessionStorage.getItem("username"));
    return (
      <div style={style.Detail} className="details">
        <fieldset style={style.Detail} className="nav">
          <ul>
            <li>
              <Link to="/flash">热点</Link>
            </li>

            <li>
              <Link to="/entertainment">娱乐</Link>
            </li>

            <li>
              <Link to="/technology">科技</Link>
            </li>

            <li>
              <Link to="/game">游戏</Link>
            </li>
          </ul>
        </fieldset>

        <fieldset style={style.Detail} className="detail">
          <Newsid />
        </fieldset>
        <fieldset style={style.Detail} className="post">
          <div>
            <Postcomment Home="1" onChangeState={this.UpDate} />
          </div>
        </fieldset>
        <fieldset style={style.Detail} className="list">
          <div>
            评论列表
            <hr />
            {commentlist}
          </div>
        </fieldset>

        <a href="http://localhost:3000">
          <button style={style.Detail} className="gohome">
            返回首页
          </button>
        </a>
      </div>
    );
  }
}
