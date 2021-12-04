
import tokenVerify from './utils/tokenVerify';
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopsRouter = require('./routes/shops');
var categroyRouter = require('./routes/categroy');
var goodsRouter = require('./routes/goods');
var rolesRouter = require("./routes/roles")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 配置跨域访问
app.use(function(req,res,next){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","content-type,token,x-requested-with");
  res.setHeader('Access-Control-Allow-Methods',"DELETE")
  next();
});

// 异常测试
// app.use(function(req, res, next) {
//   next(createError(500));
// });

// 这句话表示验证token，验证成功代码继续往下执行
app.use(tokenVerify);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shops',shopsRouter);
app.use('/categroy',categroyRouter);
app.use("/goods",goodsRouter);
app.use("/roles",rolesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8002,function(){
  console.log('you server is running at 8002');
})

module.exports = app;
