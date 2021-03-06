const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

 const db = client.db('TodoApp');

  db.collection('Users').insertOne({
    name: "Patrick Judson",
    age: 40,
    location: 'Minnesota'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

 client.close();
});
