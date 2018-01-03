import User from '../../models/User';

const MONGO_URI = 'mongodb://heroku_cgttkpc0:2s93o46j2583kagjb9mu05tj4g@ds163826.mlab.com:63826/heroku_cgttkpc0';

export default {
  init: () => {
    //
    new User({username: 'root', password: 'password'}).save(function (err) {
      err ? console.log(err) : console.log(User.find({username: 'root'}) ? 'User Loaded' : 'No User Loaded');
    });
  }
}
