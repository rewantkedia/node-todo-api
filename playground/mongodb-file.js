const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
    if(err) {
        return console.log("Unable to connect to the database", err);
    }
    /* db.collection('Todos').find({completed: true}).toArray().then((doc)=>{
         console.log('Todos');
       //  console.log(JSON.stringify((doc,undefined,2)));
         console.log(doc);*/
    db.collection('Users').find({name: 'Susu chutiya'}).toArray().then((doc) => {
    console.log(doc);
},(err)=>{
        return console.log('Error',err);
})
db.close();
});




    /*})
},(err)=>{
        return console.log('Error',err);
})
 db.close();
});*/