import React, { Component } from "react";
import { Link } from "react-router-dom";
import news from "./details/newsContent";
// import Flash from './Flash';
import style from "./Home.modules.css";
import NewsList from "./NewsList";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      changstate: "",
    };
    this.SearchNews = this.SearchNews.bind(this);
    this.SearchTextInput = React.createRef();
  }

  handleScrollTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  SearchNews() {
    let tosearch = String(this.SearchTextInput.current.value);
    let willval = [];
    news.map((val) => {
      console.log(val);
      if (val.title.indexOf(tosearch) !== -1) {
        willval.push(val);
      }
    });
    sessionStorage.setItem("nowval", JSON.stringify(willval));
    window.location.href = "http://localhost:3000/showsearch";
  }

  render() {
    let userlink;
    if (sessionStorage.getItem("username") !== null) {
      userlink = (
        <li>
          <a>{sessionStorage.getItem("username")}</a>
        </li>
      );
    } else {
      userlink = (
        <li>
          <a>未登录</a>
        </li>
      );
    }

    let exitloginlink;
    if (sessionStorage.getItem("username") !== null) {
      exitloginlink = (
        <li>
          <Link
            to="/"
            onClick={() => {
              sessionStorage.removeItem("username");
              sessionStorage.removeItem(" password");
              sessionStorage.removeItem(" permission");
              this.setState({ changstate: "" });
            }}>
            退出登录
          </Link>
        </li>
      );
    }

    return (
      <div style={style.Home} className="home">
        <fieldset style={style.Home} className="background">
          <h2 style={style.Home} className="Head">
            讯飞头条
          </h2>
          <input
            type="text"
            style={style.Home}
            className="SearchText"
            ref={this.SearchTextInput}></input>
          <button
            className="SearchButton"
            style={style.Home}
            onClick={this.SearchNews}>
            search
          </button>
        </fieldset>

        <fieldset style={style.Home} className="ListPage">
          <div style={style.Home} className="Nav">
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
              <li>
                <Link to="/login" style={style.Home} className="tologin">
                  登录
                </Link>
              </li>
              {userlink}
              {exitloginlink}
            </ul>
          </div>
          <div>
            <NewsList data={news} />
          </div>
        </fieldset>
        <button
          onClick={this.handleScrollTop}
          style={style.Home}
          className="totop">
          返回顶部
        </button>
      </div>
    );
  }
}
