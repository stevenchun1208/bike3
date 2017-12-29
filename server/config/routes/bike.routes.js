const router = require('express').Router();
const bikeController = require('../../controllers/bikes');


// /api/auth/login
module.exports = router
  .get('/', bikeController.index)
  .post('/', function(request, response){
    console.log('creating bike');
    bikeController.create(request, response);
  })
  
