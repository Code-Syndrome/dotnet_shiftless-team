import React from "react";
import { Route, Routes } from "react-router";
import Admin from "./Admin";
import Login from "./Login";
import SignUp from "./SignUp";
import Flash from "../src/homepage/Flash";
import Entertainment from "../src/homepage/Entertainment";
import Technology from "../src/homepage/Technology";
import Game from "../src/homepage/Game";
import Detail from "../src/homepage/details/Detail";
import ShowSearch from "../src/homepage/ShowSearch";
import Home from "../src/homepage/Home";

export class App extends React.Component {
  constructor() {
    super();
    this.newsarray = [];
  }

  fetchAPI = async () => {
    try {
      const response = await fetch(`http://localhost:5000/GetNews`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
        .catch((e) => console.log("错误：", e));
      const data = await response;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    console.log("Apparray:" + this.newsarray);
    return (
      <div className="App">
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/flash" element={<Flash />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/game" element={<Game />} />
            <Route
              path="/detail/:id"
              element={<Detail data={this.newsarray} />}
            />

            <Route path="/showsearch" element={<ShowSearch />} />

            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Admin" element={<Admin />} />

            <Route index element={<Home data={this.newsarray} />} />
          </Routes>
        </div>
      </div>
    );
  }
}
