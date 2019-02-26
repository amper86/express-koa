const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  resave: true,
  secret: 'login',
  saveUninitialized: true,
  cookie: {
    maxAge: 60000
  }
}));
app.use(session({
  resave: true,
  secret: 'mail',
  saveUninitialized: true,
}));

app.use(flash());
app.use('/', require('./routes/index'));

app.use((req, res, next) => {
  let err = new Error('Not Found');

  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('pages/error', {status: res.statusCode, error: err});
});

const server = app.listen(process.env.PORT || 3000, function () {
  console.log(`Example app listening on port: ${server.address().port}`);
});

