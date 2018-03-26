const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
       return console.log('Error',err);
    }
    console.log('Connected to database.');

    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectId('5ab92a137da48feacae8f574')
    },{
        $set: {
            completed : true
        }
    },{
        returnOriginal : false
    }).then((result)=>{
        console.log(result);
    })
})