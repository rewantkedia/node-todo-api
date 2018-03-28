const mongoose = require('./../server/db/mongoose');
const ObjectId = require('mongodb').ObjectID;
const Todo = require('./../server/models/Todo').Todo;

var id = '5aba10cf1395492e88e2f455';

if(!ObjectId.isValid(id))
{
    return console.log('Id not valid sir.');
}
Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos:  ',todos);
});



Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log('Todo:  ',todo);
});

Todo.findById(id).then((todo)=>{

    if(!todo)
{
    return  console.log('No such id.  ');
}
    console.log('Todo by id: ',todo);
})