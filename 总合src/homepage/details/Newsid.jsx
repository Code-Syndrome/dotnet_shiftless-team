import React from "react";
import news from "../details/newsContent";
import { useParams } from "react-router-dom";
import style from "./Newsid.modules.css";

export default function Newsid() {
  const { id } = useParams();
  var newsindex;
  news.map((new_) => {
    if (new_.id == id) {
      sessionStorage.setItem("news", JSON.stringify(new_));
    }
  });
  newsindex = JSON.parse(sessionStorage.getItem("news"));
  return (
    <div style={style.Newsid}>
      <h2 className="newsindextitle">{newsindex.title}</h2>
      <hr />
      <p>{newsindex.content}</p>
    </div>
  );
}
