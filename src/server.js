'use strict';

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');

const signinRoute = require('./routes/signin-route');
const signupRoute = require('./routes/signup-route');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use(signinRoute);
app.use(signupRoute);

mongoose.connect('mongodb://localhost:27017/signup', { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = {
  server: app,
  start: PORT => {
    if(!PORT) { throw new Error('missing PORT');}
    app.listen(PORT, () => {
      console.log(`listen on ${PORT}`);
    });
  }
}