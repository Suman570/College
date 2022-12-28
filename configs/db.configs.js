const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = "florist";
const connectURL = "mongodb://localhost:27017";
const OID = mongodb.ObjectId;

module.exports = {
    MongoClient,
    dbName,
    connectURL,
    OID
}