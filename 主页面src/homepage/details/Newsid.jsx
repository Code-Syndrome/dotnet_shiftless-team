import React from 'react'
import news from '../details/newsContent'
import { useParams } from 'react-router-dom'

export default function Newsid() {
    const { id } = useParams();
    var newsindex;
    news.map((new_) => {
        if (new_.id == id) {
            sessionStorage.setItem("news", JSON.stringify(new_));
        }
    })
    newsindex = JSON.parse(sessionStorage.getItem("news"));
    return (
        <div>
            <h2>{newsindex.title}</h2>
            <hr />
            <p>{newsindex.content}</p>
        </div>
    )
}
