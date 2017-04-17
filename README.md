### 	react-hacker-news简介

通过请求Firebase开放的[API](https://github.com/HackerNews/API)获得新闻数据，用react绑定数据渲染页面。

###	依赖环境
![依赖项](http://i.imgur.com/TuuYlmH.png)


###	项目使用步骤
-	在项目根目录下运行命令行：
```
	npm install  //安装依赖项
	npm install -g http-server //配置服务器
```

此时项目目录是这样的：
![项目目录](http://i.imgur.com/TTCbkqB.png)

-	在根目录下打开命令行工具，进行编译
```
	//实时编译
	npm run run //详见webpack.config.js配置
	//仅一次编译
	webpack
```
编译完成后，根目录下会生成build文件夹，里面装有编译好的js文件

-	最后一步：打开服务器，运行html/HackerNews.html
```
	npm http-server -p 8888 
```
打开浏览器，输入：127.0.0.1:8888/html/HackerNews.html即可。

效果是这样的：
![页面效果](http://i.imgur.com/zIivh5R.png)
点击新闻条目会跳转到相应的网站

###	Firebase提供的api链接[点击这里](https://github.com/HackerNews/API)

###	项目中遇到的问题
-	What does $.when.apply($, someArray) do?
	>.apply is used to call a function with an array of arguments. It takes each element in the array, and uses each as a parameter to the function. .apply can also change the context (this) inside a function.So, let's take $.when. It's used to say "when all these promises are resolved... do something". It takes an infinite (variable) number of parameters.That's where .apply comes in. It takes the array, and calls $.when with each element as a parameter (and makes sure the this is set to jQuery/$), so then it all works :-)。
	来自stackoverflow的回答，解释的很通俗易懂。点击[这里](http://stackoverflow.com/questions/14777031/what-does-when-apply-somearray-do)查看原答案
	点赞第二的答案也很棒哟~
---


###	最后
作为一只前端小菜鸟，深觉前端可学的东西太多，所以目前还在努力学习各种技术中，如果项目有任何问题，欢迎issues或者微博@不想当翻译的死宅不是好程序媛。

