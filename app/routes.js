var app = require('express').Router(); 
var userController = require('./controllers/users.js');

/*服务端路由控制*/
app.post('/todo', userController.addText)

module.exports = app;
