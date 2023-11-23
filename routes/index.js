var express = require('express');
var routes = express.Router();
const userModel = require('./users');
const postModel = require('./post');

routes.get('/',function(req, res, next){
   res.render('index',{title : 'my website'})
});
routes.get('/createuser', async function(req, res , next){
   let createduser = await userModel.create({
      username: 'admin',
       password: 'admin',
       posts: [],
      //  dp: {
      //    type: String,
      //    // default: 'default-avatar.jpg',
      //  },
       email: 'admin@gmail.com',
       fullName: 'admin',
   })
   res.send(createduser);
})
module.exports = routes