const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    User.findOne({ email: request.body.email })
      .then(user => {
        if (!user) { throw new Error(); }

        return User.validatePassword(request.body.password, user.password)
          .then(() => {
            // complete login
            completeLogin(request, response, user);
          });
      })
      .catch(() => {
        response.status(401).json('email/password combo invalid');
      });
  },
  register(request, response) {
    console.log("hi")
    User.create(request.body)
      .then(user => {
        // complete login
        completeLogin(request, response, user);
      })
      .catch(console.log(response));
  },
  logout(request, response) {
    console.log('logging out ');

    request.session.destroy();

    response.clearCookie('userID');
    response.clearCookie('expiration');

    response.json(true);
  },
};


function completeLogin(request, response, user) {
  console.log('complete login');

  request.session.user = user.toObject();
  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);

  response.json(user);
}
