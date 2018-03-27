var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todos'/*(This name specifies the name of collection)*/,{
    text:{
        type: String,
        required: true,
        minlength: 1,
        trim: true  ///removes any useless spaces
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        deault : null
    }
});

var User = mongoose.model('Users',{
   email:{
       type : String,
       required : true,
       minlength: 1,
       trim: true
   }
});
var newTodo = new Todo({
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

user1.save().then((doc)=>{console.log(doc)},(err)=>{console.log(err)});