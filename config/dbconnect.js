//const config = require("config");
const { MongoClient } = require('mongodb');
//const { db, mongouri } = config.get('dbConfig');
 async function dbbasecon(mongouri,db) {
    const client = new MongoClient(mongouri);
    await client.connect();
    const database = client.db(db);
    console.log("db connection successful");
    return database;
}
module.exports = {
    dbbasecon
}