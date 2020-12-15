'use strict';

const express = require('express');
const router = express.Router();
const userSchema = require('../auth/schema'); 

router.post('/signin', async (req, res) => {

  /*
    Now that we finally have username and password, let's see if it's valid
    1. Find the user in the database by username
    2. Compare the plaintext password we now have against the encrypted password in the db
       - bcrypt does this by re-encrypting the plaintext password and comparing THAT
    3. Either we're valid or we throw an error
  */
  try {
  const user = await Users.findOne({ username: username });
    if (user) { // If a user was found...
    const valid = await bcrypt.compare(password, user.password);
      if (valid) { // If the password matches...
      res.status(200).json(`${user.username} is now authenticated.`); // Send back the username
      } else { // Password doesn't match...
      throw new Error('Invalid Password')
      }
    } else { // If the user was not found...
    throw new Error('Invalid User');
    }
  } catch (error) {
  // Send back a generic error message of 'Invalid Login'
    res.status(403).send("Invalid Login");
  }
});

module.exports = router;