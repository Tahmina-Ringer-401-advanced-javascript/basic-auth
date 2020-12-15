'use strict';

const express = require('express');
const router = express.Router();
const userSchema = require('../auth/schema'); 

router.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo

module.exports = router;