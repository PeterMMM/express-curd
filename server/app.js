var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
const port = 8080;

mongoose.connect('mongodb://localhost:27017/lap_juice')
.then(() => {
  console.log("Database connected.");
})
.catch((err) => {
  console.error("Fail to connect dataabse : ", err);
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var juiceRouter = require('./routes/juice');
var foodRouter = require('./routes/food');
var authRouter = require('./routes/auth');

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/juice', juiceRouter);
app.use('/food', foodRouter);
app.use('/auth', authRouter);

app.listen(port,() => {
  console.log(`Expess backend app listening on port ${port}`);
})
module.exports = app;
