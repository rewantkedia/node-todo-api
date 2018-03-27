var express = require('express');
var bodyParser = require('body-parser');

var app = express();


var mongoose = require('./db/mongoose');
var Todo = require('./models/Todo').Todo;
var User = require('./models/User').User;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var newTodo = new Todo({
        text : req.body.text,
        completed: req.body.completed
    });
    newTodo.save().then(()=>{res.send(newTodo)},(err)=>{res.status(400).send(err)});
})












app.listen(3000,()=>{
    console.log("Server is up and running on port 3000");
})
/*var newTodo = new Todo({
    text:"Complete the course"
});

var newTodo_1 =  new Todo({
    text: 'Have Breakfast',
    completed: true,
    completedAt: 10
});

var user1 = new User({
    email:'kediarewant@gmail.com'
});

//newTodo.save().then((doc)=>{console.log(doc)},(err)=>{console.log(err)});

//newTodo_1.save().then((doc)=>{console.log(doc)},(err)=>{console.log(err)});

user1.save().then((doc)=>{console.log(doc)},(err)=>{console.log(err)});*/