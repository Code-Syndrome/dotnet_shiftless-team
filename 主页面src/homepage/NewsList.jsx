import news from './details/newsContent'
import { Link} from 'react-router-dom'
import style from './NewsList.modules.css'
import React, { Component } from 'react'

export default class NewsList extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    testlist = () => {
        if (this.props.data === 1) {
            let newlist = [];
            news.map((list) => {
                if (list.id % 10 === 1) {
                    newlist.push(list);
                }
            })
            sessionStorage.setItem("testnews",JSON.stringify(newlist));
            console.log(newlist);
        }
        else if (this.props.data === 2) {
            let newlist = [];
            news.map((list) => {
                if (list.id % 10 === 2) {
                    newlist.push(list);
                }
            })
            sessionStorage.setItem("testnews",JSON.stringify(newlist));
        }
        else if (this.props.data === 3) {
            let newlist = [];
            news.map((list) => {
                if (list.id % 10 === 3) {
                    newlist.push(list);
                }
            })
            sessionStorage.setItem("testnews",JSON.stringify(newlist));
        }
        else if (this.props.data === 4) {
            let newlist = [];
            news.map((list) => {
                if (list.id % 10 === 4) {
                    newlist.push(list);
                }
            })
            sessionStorage.setItem("testnews",JSON.stringify(newlist));
        }
        else {
            sessionStorage.setItem("testnews",JSON.stringify(news));       
        }
    }

    render() {
        this.testlist();
        let newss=JSON.parse(sessionStorage.getItem("testnews"));
           
        return (
            <div style={style.NewsList} className="news">
                <ul>
                    {
                        newss.map((val) => (
                            <li key={val.id} >
                                <Link to={`/detail/${val.id}`}>{val.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}


