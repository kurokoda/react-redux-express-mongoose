import User from '../models/User';

/* eslint-disable no-console */

export default {
  init: () => {
    //
    new User({username: 'root', password: 'password'}).save(function (err) {
      err ? console.log(err) : console.log(User.find({username: 'root'}) ? 'User Loaded' : 'No User Loaded');
    });
  }
};
