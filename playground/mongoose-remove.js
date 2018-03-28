const mongoose = require('./../server/db/mongoose');
const ObjectId = require('mongodb').ObjectID;
const Todo = require('./../server/models/Todo').Todo;


/*Todo.remove({}).then((res)=>{
    console.log(res);
})*/    //removes all the documents in Todo

Todo.findOneAndRemove()

var id = '5aba119a8eec263d4c123b4f';

Todo.findOneAndRemove({
    _id:id
}).then((res)=>{
    if(!res)
        return console.log('NOT FOUND');
    console.log(res);
})

/*Todo.findByIdAndRemove(id).then((res)=>{
    console.log(res);
})*/