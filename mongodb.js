//CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to Connect.');
    }

    //connect db
    const db = client.db(databaseName)


    // Insert One Data

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Yash Patel',
    //     age: 22
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.');
    //     }

    //     console.log(result.ops);
    // })


    // Insert Many Data

    // db.collection('users').insertMany([{
    //     name: 'Aman',
    //     age: 32
    // }, {
    //     name: 'Esha',
    //     study: 'Science'
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('data').insertMany([{
    //     description: 'Work',
    //     completed: true
    // }, {
    //     description: 'Gym',
    //     completed: false
    // }, {
    //     description: 'Sleep',
    //     completed: true
    // }], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert Data.");
    //     }
    //     console.log(result.ops);
    // })


    // Fetch Single Data

    // db.collection('users').findOne({ _id: new ObjectID("60185d6bafce8073abf64071") }, (error, user) => {
    //     if (error | user == null) {
    //         return console.log("Unable to find.");
    //     }

    //     console.log(user);
    // })


    // Fetch Multiple Data

    // db.collection('users').find({ age: 22 }).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({ age: 22 }).count((error, users) => {
    //     console.log(users);
    // })

    // db.collection('data').findOne({ _id: new ObjectID("6018376f0f378f71a40a77b9") }, (error, data) => {
    //     console.log(data);
    // })

    // db.collection('data').find({ completed: false }).toArray((error, data) => {
    //     console.log(data);
    // })


    // Update one Data

    // db.collection('users').updateOne({ _id: new ObjectID("60185d6bafce8073abf64071") }, {
    //     $set: {
    //         name: 'Jaimin'
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })


    // Update Many

    // db.collection('users').updateMany({ age: 22 }, {
    //     $set: {
    //         study: 'Science'
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })


    // Delete Many

    // db.collection('users').deleteMany({
    //     age: 24
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })


    // Delete One

    // db.collection('users').deleteOne({
    //     name: 'Esha'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })
})