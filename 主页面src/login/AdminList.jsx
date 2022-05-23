import React, { Component } from "react";
import style from "./staticfile/AdminList.modules.css";

export default class AdminList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowshow: this.props.data,
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
    this.AddUserNameText = React.createRef();
    this.AddUserPassWordText = React.createRef();
    this.AddUserPermissionText = React.createRef();
    this.DeleteUserByUserName = React.createRef();
    this.UpdateUserName = React.createRef();
    this.UpdateUserPassWord = React.createRef();
    this.UpdateUserPermission = React.createRef();
    this.GetUserByUserName = React.createRef();

    this.AddNewsIdText = React.createRef();
    this.AddNewsTitleText = React.createRef();
    this.AddNewsContentText = React.createRef();
    this.DeleteNewsById = React.createRef();
    this.UpdateNewsId = React.createRef();
    this.UpdateNewsTitle = React.createRef();
    this.UpdateNewsContent = React.createRef();
    this.GetNewsById = React.createRef();
  }

  AddUser = () => {
    const UserData = {
      username: this.AddUserNameText.current.value,
      password: this.AddUserPassWordText.current.value,
      permission: this.AddUserPermissionText.current.value,
    };
    fetch(`http://localhost:5000/UserData`, {
      method: "POST",
      body: JSON.stringify(UserData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("填加了" + data + "条用户数据");
      })
      .catch((e) => console.log("错误：", e));
  };

  DeleteUser = () => {
    const DeleteUserName = this.DeleteUserByUserName.current.value;
    fetch(`http://localhost:5000/UserData/${DeleteUserName}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("删除了" + data + "条用户数据");
      })
      .catch((e) => console.log("错误：", e));
  };

  UpdateUser_ = () => {
    const UserData = {
      username: this.UpdateUserUserName.current.value,
      password: this.UpdateUserPassWord.current.value,
      permission: this.UpdateUserPermission.current.value,
    };
    fetch(`http://localhost:5000/UserData`, {
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
      `http://localhost:5000/UserData/${this.GetUserByUserName.current.value}`,
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
    fetch(`http://localhost:5000/UserData}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          Users: data,
        });
      })
      .catch((e) => console.log("错误：", e));
  };

  AddNews = () => {
    const NewsData = {
      NewsId: this.AddNewsIdText.current.value,
      NewsTitle: this.AddNewsTitleText.current.value,
      NewsContent: this.AddNewsTitleText.current.value,
    };
    fetch(`http://localhost:5000/NewsData`, {
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
    const DeleteNewsId = this.DeleteNewsById.current.value;
    fetch(`http://localhost:5000/NewsData/${DeleteNewsId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("删除了" + data + "条新闻数据");
      })
      .catch((e) => console.log("错误：", e));
  };

  UpdateNews_ = () => {
    const NewsData = {
      NewsId: this.UpdateNewsId.current.value,
      NewsTitle: this.UpdateNewsTitle.current.value,
      NewsContent: this.UpdateNewsContent.current.value,
    };
    fetch(`http://localhost:5000/NewsData`, {
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
    fetch(`http://localhost:5000/NewsData/${this.GetNewsById.current.value}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          selectNews: {
            NewsId: data.NewsId,
            NewsTitle: data.NewsTitle.trim(),
            NewsContent: data.NewsContent.trim(),
          },
        });
      })
      .catch((e) => console.log("错误：", e));
  };

  GetNews_ = () => {
    fetch(`http://localhost:5000/NewsData}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          Newss: data,
        });
      })
      .catch((e) => console.log("错误：", e));
  };

  ShowList = () => {
    if (this.state.nowshow === "AddUser") {
      <ul>
        <label>AddUserName</label>
        <li>
          <input type="text" ref={this.AddUserNameText} />
        </li>
        <label>AddUserPassWord</label>
        <li>
          <input type="text" ref={this.AddUserPassWordText} />
        </li>
        <label>AddUserPermission</label>
        <li>
          <input type="text" ref={this.AddUserPermissionText} />
        </li>
        <li>
          <input type="button" value="AddUser" onClick={() => this.AddUser} />
        </li>
      </ul>;
    } else if (this.state.nowshow === "DeleteUserByUserName") {
      <ul>
        <label>DeleteUserByUserName</label>
        <li>
          <input type="text" ref={this.DeleteUserByUserName} />
        </li>
        <li>
          <input
            type="button"
            value="DeleteUser"
            onClick={() => this.DeleteUser}
          />
        </li>
      </ul>;
    } else if (this.state.nowshow === "UpdateUser") {
      <ul>
        <label>UpdateUserName</label>
        <li>
          <input type="text" ref={this.UpdateUserName} />
        </li>
        <label>UpdateUserPassWord</label>
        <li>
          <input type="text" ref={this.UpdateUserPassWord} />
        </li>
        <label>UpdatePermission</label>
        <li>
          <input type="text" ref={this.UpdateUserPermission} />
        </li>
        <li>
          <input
            type="button"
            value="UpdateUser"
            onClick={() => this.UpdateUser_}
          />
        </li>
      </ul>;
    } else if (this.state.nowshow === "GetUserByUserName") {
      <ul>
        <label>GetUserByUserName</label>
        <li>
          <input type="text" ref={this.GetUserByUserName} />
        </li>
        <li>
          <input
            type="button"
            value="根据用户名获取"
            onClick={() => this.GetUserByUserName_}
          />
        </li>
        <label>UseName</label>
        <li>{this.state.selectUser.username}</li>
        <label>PassWord</label>
        <li>{this.state.selectUser.password}</li>
        <li>{() => this.AdminOrUser}</li>
      </ul>;
    } else if (this.state.nowshow === "GetUser") {
      <ul>
        <li>
          <input
            type="button"
            value="获取全部用户"
            onClick={() => this.GetUser_}
          />
        </li>
        {this.state.Users.map((user) => {
          <li>
            <label>UserName:</label>
            {user.username}
            <br />
            <label>PassWord:</label>
            {user.password}
            <br />
            {() => {
              if (user.permission === 1) {
                <li>普通用户</li>;
              } else {
                <li>管理员</li>;
              }
            }}
          </li>;
        })}
      </ul>;
    } else if (this.state.nowshow === "AddNews") {
      <ul>
        <label>AddNewsId</label>
        <li>
          <input type="text" ref={this.AddNewsIdText} />
        </li>
        <label>AddNewsTitle</label>
        <li>
          <input type="text" ref={this.AddNewsTitleText} />
        </li>
        <label>AddNewsContent</label>
        <li>
          <input type="text" ref={this.AddNewsContentText} />
        </li>
        <li>
          <input type="button" value="AddNews" onClick={() => this.AddNews} />
        </li>
      </ul>;
    } else if (this.state.nowshow === "DeleteNewsById") {
      <ul>
        <label>DeleteNewsById</label>
        <li>
          <input type="text" ref={this.DeleteNewsById} />
        </li>
        <li>
          <input
            type="button"
            value="删除该新闻"
            onClick={() => this.DeleteNews_}
          />
        </li>
      </ul>;
    } else if (this.state.nowshow === "UpdateNews") {
      <ul>
        <label>UpdateNewsId</label>
        <li>
          <input type="text" ref={this.UpdateNewsId} />
        </li>
        <label>UpdateNewsTitle</label>
        <li>
          <input type="text" ref={this.UpdateNewsTitle} />
        </li>
        <label>UpdateNewsContent</label>
        <li>
          <input type="text" ref={this.UpdateNewsContent} />
        </li>
        <li>
          <input
            type="button"
            value="UpdateNews"
            onClick={() => this.UpdateNews_}
          />
        </li>
      </ul>;
    } else if (this.state.nowshow === "GetNewsById") {
      <ul>
        <label>SelectNewsById</label>
        <li>
          <input type="text" ref={this.GetNewsById} />
        </li>
        <li>
          <input
            type="button"
            value="根据新闻id获取"
            onClick={() => this.GetNewsById_}
          />
        </li>
        <label>NewsId:</label>
        <li>{this.state.selectNews.NewsId}</li>
        <label>NewsTitle:</label>
        <li>{this.state.selectUser.NewsTitle}</li>
        <label>NewsContent:</label>
        <li>{this.state.selectUser.NewsContent}</li>
      </ul>;
    } else if (this.state.nowshow === "GetAllNews") {
      <ul>
        <li>
          <input
            type="button"
            value="获取全部新闻"
            onClick={() => this.GetNews_}
          />
        </li>
        {this.state.Newss.map((news) => {
          <li>
            <label>NewsId:</label>
            {news.NewsId}
            <br />
            <label>NewsTitle:</label>
            {news.NewsTitle}
            <br />
            <label>NewsContent:</label>
            {news.NewsContent}
          </li>;
        })}
      </ul>;
    }
  };

  AdminOrUser = () => {
    if (this.state.selectUser.permission === 1) {
      <li>普通用户</li>;
    } else {
      <li>管理员</li>;
    }
  };

  render() {
    return (
      <div style={style.AdminList} className="AdminListMainDiv">
        <fieldset className="showList">
          <h1>Welcome Back Admin!</h1>
          <textarea>{() => this.ShowList}</textarea>
        </fieldset>
      </div>
    );
  }
}
