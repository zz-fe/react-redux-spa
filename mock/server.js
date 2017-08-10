let express = require('express')
let app = express();
let ad = require("./home/ad");
let list = require("./home/list")

//广告的接口
app.get('/api/ad',(req,res) =>{
  res.send(ad);
})

app.get('/api/list/:cityName/:id',(req,res) =>{
  console.log('api/list')
  res.send(list);
})
//搜索出来
let serachData = require('./search/info')
app.get('/api/search/:keyword',(req,res) =>{
  res.send(serachData);
})

//详情页面
let detailData = require('./detail/info')
app.get('/api/detail/info/:id',(req,res) =>{
  res.send(detailData);
})

//详情页面 --评价列表
let commentData = require('./detail/comment')
app.get('/api/detail/comment/:id',(req,res) =>{
  res.send(commentData);
})

app.listen(6666,() =>{
  console.log("6666 is ports")
});
