const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const controller = require('./Controllers');
// const { googleClientId, googleClientSecret } = require('./env/settings');

app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', controller.verify, (req, res) => {
  res.send('Hello');
});

app.get('/login', (req, res) => {
  res.send('login');
});

app.post('login', controller.oauth, (req, res) => {
  // OAuth -> SetCookie -> Redirect to main
  // Set user to LoggedIn, isStudent
  res.send();
});


app.listen(3000, () => { console.log('App is running in port 3000'); });
