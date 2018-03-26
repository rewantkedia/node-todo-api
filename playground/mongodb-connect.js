const MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log("Unable to connect to the database");
    }
    console.log('Connected to Database');
   db.collection('Todos').insertOne(({
        text:'walk and talk',
        completed: true
    }),(err,result)=>{
        if(err)
        {
            return console.log('Unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })

 /*  db.collection('Users').insertOne(({
        name:'Susu chutiya',
        age: 25,
        location: 'Birgunj'
    }),(err,result)=>{
        if(err)
        {
            return console.log('Unable to add',err);
        }
        console.log(JSON.stringify(result.ops[0]._id,undefined,2));

    })*/




    db.close();
})
