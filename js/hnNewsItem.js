import React,{Component} from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import url from 'url';
import moment from 'moment';


//新闻项目组件:条目的跳转地址和新闻标题由父组件传过来的数据决定
class NewsItem extends Component{
     constructor(props){
        super(props);
        this.getDomain = this.getDomain.bind(this);
        this.getCommentLink = this.getCommentLink.bind(this);
        this.getSubtext = this.getSubtext.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getRank = this.getRank.bind(this);
        this.getVote = this.getVote.bind(this);
    }
    //获取域名
    getDomain(){
        let hostname = url.parse(this.props.item.url).hostname
        //console.log(hostname)
        return hostname;
    }
    //获取评论链接
    getCommentLink(){
        let commentText = 'discuss';
        //有评论且评论条数大于等于1条
        if(this.props.item.kids && this.props.item.kids.length){
            commentText = this.props.item.kids.length + 'comments';
        }
        return (
            <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>
        );
    }
    //点赞评论等下标信息
    getSubtext(){
        return(
            <div className="newsItem-subtext">
                {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a>{moment.utc(this.props.item.time * 1000).fromNow()}|{this.getCommentLink()}
            </div>
        );
    }
    //标题
    getTitle(){
        return (
            <div className="newsItem-title"></div>
        );
    }
    //排行 
    getRank(){
        return (
            <div className="newsItem-rank">
                {this.props.rank}
            </div>
        );
    }
    //投票数
    getVote(){
        return (
            <div className="newsItem-vote">
                <a href={'https://news.ycombinator.com/vote?for='+ this.props.item.id + '&dir=up&whence=news'}>
                    <img src="../img/grayarrow2x.gif" width="10"/>
                </a>
            </div>
        );
    }
    render(){
        return(
            <div className="newsItem">
                {this.getRank()}
                {this.getVote()}
                <div className="newsItem-itemText">
                    <a 
                        className="newsItem-titleLink" 
                        href={this.props.item.url}
                    >{this.props.item.title}
                    </a>
                    <span className="newsItem-domain">
                        ({this.getDomain()})
                    </span>
                    {this.getTitle()}
                    {this.getSubtext()}
                </div>
            </div>
        )
    }
}
export default NewsItem;
