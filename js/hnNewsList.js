import React,{Component} from 'react';
import $ from 'jquery';
import _ from 'lodash';
import NewsHeader from './hnNewsHeader.js';
import NewsItem from "./hnNewsItem.js";

class NewsList extends Component{
    constructor(props){
        super(props);
        this.getMore = this.getMore.bind(this);
    }
    //底部获取更多部分
    getMore(){
        return(
            <div className="newsList-more">
                <a 
                    className="newsList-moreLink"
                    href="https://news.ycombinator.com/news?p=2"
                >
                More
                </a>
            </div>
        );
    }
    render(){
        return(
            <div className="newsList">
                <NewsHeader />
                <div className="newsList-newsItems">
                    {
                        _(this.props.items).map(function(item,index){
                            return <NewsItem key={item.id} item={item} rank={index+1} />;
                        }.bind(this)).value()
                    }
                    {this.getMore()}
                </div>
            </div>
        );
    }
}

export default NewsList;