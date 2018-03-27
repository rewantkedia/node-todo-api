var mongoose = require('mongoose');

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

module.exports={
    Todo
}