// these two require are identical, bottom wit destructuring
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// ES6 object destructuring example
// var user = {name: 'Greg', age: 25};
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

//   db.collection('Users').insertOne({
//     name: 'Greg',
//     age: 25,
//     location: 'Santa Rosa'
//   }, (err, results) => {
//     if (err) {
//     return console.log('Unable to insert user', err);
//   }
//
//   console.log(results.ops[0]._id.getTimestamp());
// });

  db.close();
});
