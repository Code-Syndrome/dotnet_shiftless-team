import React, { Component } from "react";
import style from "./staticfile/AdminList.modules.css";

export default class AdminList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectUser: {
        username: "",
        password: "",
        permission: "",
      },
      Users: [],

      selectNews: {
        NewsId: "",
        NewsTitle: "",
        NewsContent: "",
      },
      Newss: [],
    };

    this.UserRef = React.createRef();
    this.UserNameText = React.createRef();
    this.UserPassWordText = React.createRef();

    this.NewsRef = React.createRef();

    this.NewsIdText = React.createRef();
    this.NewsTitleText = React.createRef();
    this.NewsContentText = React.createRef();
  }

  AddUser = () => {
    const UserData = {
      username: this.UserNameText.current.value,
      password: this.UserPassWordText.current.value,
      permission: 1,
    };

    var userJson = JSON.stringify(UserData);
    console.log(userJson);
    fetch(`http://localhost:5000/AddUser`, {
      method: "POST",
      body: userJson,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === 0) {
          alert("该用户已存在");
        } else {
          alert("增加了" + data + "条用户数据");
        }
      })
      .catch((e) => console.log("错误：", e));
  };

  DeleteUser = () => {
    const DeleteUserName = this.UserNameText.current.value;
    fetch(`http://localhost:5000/DeleteUserByUsername/${DeleteUserName}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("删除了" + data + "条用户数据");
      })
      .catch((e) => console.log("错误：", e));
  };

  UpdateUser_ = () => {
    const UserData = {
      Username: this.UserNameText.current.value,
      Target: {
        username: this.UserNameText.current.value,
        password: this.UserPassWordText.current.value,
        permission: 1,
      },
    };
    fetch(`http://localhost:5000/UpdataUser`, {
      method: "PUT",
      body: JSON.stringify(UserData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("修改了" + data + "条用户数据");
      })
      .catch((e) => console.log("错误：", e));
  };

  GetUserByUserName_ = () => {
    fetch(
      `http://localhost:5000/GetUserByUsername/${this.UserNameText.current.value}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          selectUser: {
            username: data.username.trim(),
            password: data.password.trim(),
            permission: data.permission,
          },
        });
      })
      .catch((e) => console.log("错误：", e));
  };

  GetUser_ = () => {
    fetch(`http://localhost:5000/GetUser}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          Users: data.splic(0, 3),
        });
      })
      .catch((e) => console.log("错误：", e));
  };

  AddNews = () => {
    const NewsData = {
      NewsId: Number(this.NewsIdText.current.value),
      NewsTitle: this.NewsTitleText.current.value,
      NewsContent: this.NewsTitleText.current.value,
    };
    fetch(`http://localhost:5000/AddNews`, {
      method: "POST",
      body: JSON.stringify(NewsData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("填加了" + data + "条新闻数据");
      })
      .catch((e) => console.log("错误：", e));
  };

  DeleteNews_ = () => {
    const DeleteNewsId = this.NewsIdText.current.value;
    fetch(`http://localhost:5000/DeleteNews/${Number(DeleteNewsId)}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("删除了" + data + "条新闻数据");
      })
      .catch((e) => console.log("错误：", e));
  };

  UpdateNews_ = () => {
    const NewsData = {
      Target: {
        NewsId: Number(this.NewsIdText.current.value),
        NewsTitle: this.NewsTitleText.current.value,
        NewsContent: this.NewsContentText.current.value,
      },
      NewsId: this.NewsIdText.current.value,
    };
    fetch(`http://localhost:5000/UpdataNews`, {
      method: "PUT",
      body: JSON.stringify(NewsData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("修改了" + data + "条新闻数据");
      })
      .catch((e) => console.log("错误：", e));
  };

  GetNewsById_ = () => {
    fetch(
      `http://localhost:5000/GetNewsById/${Number(
        this.NewsIdText.current.value
      )}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          selectNews: {
            NewsId: data.newsId,
            NewsTitle: data.newsTitle,
            NewsContent: data.newsContent,
          },
        });
      })
      .catch((e) => console.log("错误：", e));
  };

  GetNews_ = () => {
    fetch(`http://localhost:5000/GetNews}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          Newss: data.splic(0, 3),
        });
      })
      .catch((e) => console.log("错误：", e));
  };

  WhichButton = () => {
    if (this.props.data === "AddUser") {
      this.AddUser();
    } else if (this.props.data === "DeleteUser") {
      this.DeleteUser();
    } else if (this.props.data === "UpdateUser") {
      this.UpdateUser_();
    } else if (this.props.data === "GetUserByUserName") {
      this.GetUserByUserName_();
    } else if (this.props.data === "GetUser") {
      this.GetUser_();
    } else if (this.props.data === "AddNews") {
      this.AddNews();
    } else if (this.props.data === "DeleteNews") {
      this.DeleteNews_();
    } else if (this.props.data === "UpdateNews") {
      this.UpdateNews_();
    } else if (this.props.data === "GetNewsById") {
      this.GetNewsById_();
    } else if (this.props.data === "GetNews") {
      this.GetNews_();
    }
  };

  componentDidUpdate() {
    if (this.props.change === "UserV") {
      this.UserRef.current.style.visibility = "visible";
      this.NewsRef.current.style.visibility = "hidden";
    } else if (this.props.change === "NewsV") {
      this.UserRef.current.style.visibility = "hidden";
      this.NewsRef.current.style.visibility = "visible";
    } else {
      this.UserRef.current.style.visibility = "hidden";
      this.NewsRef.current.style.visibility = "hidden";
    }
  }
  componentDidMount() {
    this.UserRef.current.style.visibility = "hidden";
    this.NewsRef.current.style.visibility = "hidden";
  }

  render() {
    console.log(this.state.selectNews);
    let Onelist;
    if (this.props.data === "GetUserByUserName") {
      Onelist = (
        <ul>
          <li>查询到的用户名：{this.state.selectUser.username}</li>
          <li>查询到的用户密码：{this.state.selectUser.password}</li>
          <li>查询到的用户权限：{this.state.selectUser.permission}</li>
        </ul>
      );
    } else if (this.props.data === "GetNewsById") {
      Onelist = (
        <ul>
          <li>查询到的新闻Id：{this.state.selectNews.NewsId}</li>
          <li>查询到的新闻标题：{this.state.selectNews.NewsTitle}</li>
          <li>查询到的新闻内容：{this.state.selectNews.NewsContent}</li>
        </ul>
      );
    }
    let UserAllList;
    if (this.props.data === "GetUser") {
      UserAllList = (
        <ul>
          {this.state.Users.map((user) => {
            <div>
              <li>查询到的用户名：{user.username}</li>
              <li>查询到的用户密码：{user.password}</li>
              <li>查询到的用户权限：{user.permission}</li>
            </div>;
          })}
        </ul>
      );
    } else if (this.props.data === "GetNews") {
      UserAllList = (
        <ul>
          {this.state.Newss.map((news) => {
            <div>
              <li>查询到的新闻Id：{news.NewsId}</li>
              <li>查询到的新闻标题：{news.NewsTitle}</li>
              <li>查询到的新闻内容：{news.NewsContent}</li>
            </div>;
          })}
        </ul>
      );
    }

    let list;
    if (
      this.props.data === "GetUserByUserName" ||
      this.props.data === "GetNewsById"
    ) {
      list = Onelist;
    } else if (this.props.data === "GetUser" || this.props.data === "GetNews") {
      list = UserAllList;
    }
    console.log("子组件的props" + this.props.data);
    return (
      <div style={style.AdminList} className="AdminListMainDiv">
        <fieldset className="showList">
          <h1>{this.props.data}</h1>
          <ul ref={this.UserRef}>
            <label>UserName</label>
            <li>
              <input type="text" ref={this.UserNameText} />
            </li>
            <label>UserPassWord</label>
            <li>
              <input type="text" ref={this.UserPassWordText} />
            </li>
          </ul>
          <ul ref={this.NewsRef}>
            <label>NewsId</label>
            <li>
              <input type="text" ref={this.NewsIdText} />
            </li>
            <label>NewsTitle</label>
            <li>
              <input type="text" ref={this.NewsTitleText} />
            </li>
            <label>NewsContent</label>
            <li>
              <input type="text" ref={this.NewsContentText} />
            </li>
          </ul>
          <button onClick={this.WhichButton}>GOGO</button>
          <fieldset className="ShowlistFieldset" ref={this.showlist}>
            {list}
          </fieldset>
        </fieldset>
      </div>
    );
  }
}
