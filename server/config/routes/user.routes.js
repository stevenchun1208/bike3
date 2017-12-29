const router = require('express').Router();
const userController = require('../../controllers/user');


module.exports = router
  .post('/login', userController.login)
  .post('/register', userController.register)
  .delete('/logout', userController.logout);
