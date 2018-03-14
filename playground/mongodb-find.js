
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }

 const db = client.db('TodoApp');

  console.log('Connected to MongoDB server.')

  db.collection('Users').find({name: "Marc"}).toArray().then((docs) => {

    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log('Unable to fetch data from MongoDB', err);
  });

// Example of Count.

  // console.log('Connected to MongoDB server.')
  //
  // db.collection('Todos').find().count().then((count) => {
  //
  //   console.log(`Todos count: ${count}`);
  //   //console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (err) => {
  //   console.log('Unable to fetch data from MongoDB', err);
  // });

  client.close();

});
