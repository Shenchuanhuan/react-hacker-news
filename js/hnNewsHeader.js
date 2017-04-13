import React,{Component} from 'react';
import $ from 'jquery';
import _ from 'lodash';

let navLinks = [
    {
        name: 'new',
        url: 'newest'
    },
    {
        name: 'comments',
        url: 'newcomments'
    },
    {
        name: 'show',
        url: 'show'
    },
    {
        name: 'ask',
        url: 'ask'
    },
    {
        name: 'submit',
        url: 'submit'
    }
];
class NewsHeader extends Component{
    constructor(props){
        super(props);
        this.getLogo = this.getLogo.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getNav = this.getNav.bind(this);
        this.getLogin = this.getLogin.bind(this);
    }
    //头部logo
    getLogo(){
        return (
            <div className="newsHeader-logo">
                <a href="https://www.ycombinator.com">
                    <img src="../img/y18.gif"/>
                </a>
            </div>
        );
    }
    //标题
    getTitle(){
        return (
            <div className="newsHeader-title">
                <a 
                    className="newsHeader-textLink"
                    href="https://news.ycombinator.com"    
                >
                    Hacker News
                </a>
            </div>
        );
    }
    //标题导航栏
    getNav(){
        return (
            <div className="newsHeader-nav">
                {
                    _(navLinks).map(function(navLinks){
                        return (
                            <a 
                                key={navLinks.url}
                                className="newsHeader-navLink newsHeader-textLink"
                                href={'https://news.ycombinator.com/' + navLinks.url}
                            >
                            {navLinks.name}
                            </a>
                        );
                    }).value()
                }
            </div>
        );
    }
    //登录选项
    getLogin(){
        return(
            <div className="newsHeader-login">
                <a 
                    className="newsHeader-textLink" 
                    href="https://news.ycombinator.com/login?whence=news"
                >
                login
                </a>
            </div>
        );
    }
    render(){
        return(
            <div className="newsHeader">
                {this.getLogo()}
                {this.getTitle()}
                {this.getNav()}
                {this.getLogin()}
            </div>
        )
    }
}

export default NewsHeader;