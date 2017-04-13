import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'lodash';
import NewsList from './hnNewsList.js';


$.ajax({
  url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
  dataType: 'json'
}).then(function (stories) {
    console.log(stories);
  let detailDeferreds = _(stories.slice(0, 20)).map(function (itemId) {
      console.log(itemId)
    return $.ajax({
      url: 'https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json',
      dataType: 'json'
    });
  }).value();
  //console.log(typeof detailDeferreds )
  //console.dir('1:'+detailDeferreds[0])
  return $.when.apply($, detailDeferreds);
}).then(function () {
  let items = _(arguments).map(function (argument) {
    return argument[0];
  }).value();
  console.dir('items:'+items[0])
  
  ReactDOM.render(
    <NewsList items={items}/>, 
    document.getElementById('content')
  );
});
