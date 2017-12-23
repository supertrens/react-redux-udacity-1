//give the entry and output information
const path = require('path')
module.exports ={
  entry :'./src/app.js',
  output: {
    path:path.join(__dirname , 'public'),
    filename: 'bundle.js'
  },
  module:{
    rules:[{
      loader:'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  //this is awesome to track where the error is made
  devtool: 'cheap-module-eval-source-map',
  devServer:{
    contentBase: path.join(__dirname , 'public'),
  }
};

//loader
