const Bike = require('mongoose').model('Bike');
const User = require('mongoose').model('User');

module.exports = {
  index(request, response) {
    Bike.find({_user:request.session.user._id})
      .then(bikes => response.json(bikes))
      .catch(console.log);
  },
  create(request, response){
    User.findOne({ _id: request.session.user._id })
    .then(user=>{
      const bike = new Bike(request.body);
      // console.log(bike)
      bike._user = user._id;
      console.log(bike)
      user.bikes.push(bike);
      bike.save(function(err){
        user.save(function(err){})
      });
    })
    .catch(() => {});
  }
}
