
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }

 const db = client.db('TodoApp');
  console.log('Connected to MongoDB server.')

 // Delete Many
 db.collection('Users').deleteMany({name: "Olivia"}).then((result) => {
   console.log(result);
 });

// Delete One record
// db.collection('Todos').deleteOne({text: "Something to do"}).then((result) => {
//   console.log(result);
// });

// Find one and deleteOne
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

  client.close();

});
