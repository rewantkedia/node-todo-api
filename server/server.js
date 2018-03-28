var express = require('express');
var bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectID;
const _ = require('lodash');

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
    newTodo.save().then((doc)=>{res.send(doc)},(err)=>{res.status(400).send(err)});
})

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
},(err)=>{
    res.status(400).send(e);
})
})

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectId.isValid(id))
    {
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo)
{
    return res.status(404).send();
}
        res.send(todo);
    }).catch((e)=>{
        res.status(400).send();
    })
})


app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;
if(!ObjectId.isValid(id))
{
    return res.status(404).send();
}

    Todo.findByIdAndRemove(id).then((result)=>{
        if(!result)
    {
    res.status(404).send();
    }
    res.send(result);
    }).catch((e)=>{
        res.status(400).send();
})



})

app.patch('/todos/:id',(req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body,['text','completed']);
    if(!ObjectId.isValid(id))
    {
        return res.status(404).send();
    }
    console.log(_.isBoolean(body.completed));
    if(_.isBoolean(body.completed) && (body.completed == true))
    {
        body.completedAt = new Date().getTime();
    }
    else
    {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
    if(!todo)
{
    return res.status(404).send();
}
res.send(body);
    }).catch((e)=>{
        res.status(404).send();
})
})


app.listen(3000,()=>{
    console.log("Server is up and running on port 3000");
})
module.exports={
    app
}
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