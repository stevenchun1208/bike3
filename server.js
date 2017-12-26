const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;
const path = require('path');

const app = express();

const sessionConfig = {
  saveUninitialized: true,
  secret: 'sessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000,
  }
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve('dist')));
app.use(cookieParser('thisisasecret'));
app.use(session(sessionConfig));



require('./server/config/database');

// app.use('/api/bike', require('./server/config/routes/bike.routes'));
app.use('/api/user', require('./server/config/routes/user.routes'));
// app.use('/', require('./server/config/routes/user.routes'));




// app.use(require('./server/config/routes/catchall-routes'));


app.listen(port, () => console.log(`express listening on port ${ port }`));
