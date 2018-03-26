const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log("Error",err);
    }
    console.log("Connected to  Database.");

    //find one and delete
  /*  db.collection('Todos').findOneAndDelete({text:'walk and talk'}).then((res)=>{
        console.log(res);
    });*/

    //delete one
  /*  db.collection('Todos').deleteOne({text:'walk and talk'}).then((res)=>{
        console.log(res);
    },(err)=>{
        console.log(err);
})*/


    //delete many
    db.collection('Todos').deleteMany({completed: true}).then((res)=>{
        console.log(res);
    },(err)=>{
        console.log(err);
})






    db.close();
})