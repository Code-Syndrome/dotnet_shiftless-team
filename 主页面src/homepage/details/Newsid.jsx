import React from 'react'
import news from '../details/newsContent'
import { useParams } from 'react-router-dom'

export default function Newsid() {
    const { id } = useParams();
    var newsindex;
    news.map((new_) => {
        console.log("into map");
        if (new_.id == id) {
            console.log(new_);
            sessionStorage.setItem("news", JSON.stringify(new_));
        }
        console.log("map over");
    })
    console.log("into Newsid");
    newsindex = JSON.parse(sessionStorage.getItem("news"));
    console.log("newsindex:", newsindex);
    return (
        <div>
            <h2>{newsindex.title}</h2>
            <hr />
            <p>{newsindex.content}</p>
        </div>
    )
}
