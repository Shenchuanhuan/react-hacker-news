const path = require('path');

module.exports = {
  entry:{
    HackerNews:'./js/HackerNews.js'
  },
  output:{
    path:path.resolve(__dirname,'build/js'),
    filename:"[name].js"
  },
  module:{
    rules:[
      {
          test: /\.js$/,
          use: [
          {
            loader:'babel-loader',
            options:{
              presets:["react"]
            }
          }
        ]
      }
    ]
  }
}
