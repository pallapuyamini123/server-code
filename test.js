const { dbbasecon } = require("./config/dbconnect");
const config = require("config");
const { fetchRecord } = require("./fetch");
const { Collection } = require("mongodb");
const { db, mongouri } = config.get('dbConfig');
(async () => {
    try {
        console.log("hii")
        const dbcon = await dbbasecon(mongouri, db);
        //const {client,database}=dbcon;
        while (true) {
            console.log("hii")
            const { status, record } = await fetchRecord(dbcon);
            console.log("................")
           // console.log(record);
            if (status === 200) {
                var myquery = { username: "yamini12345" };
                var newvalues = { $set: {username: "chinni",status:200} };
                await dbcon.collection("yamini_test").updateOne(myquery, newvalues)
        }
        else{
            console.log("error with status 400 ")
        }
        }
    } catch (error) {
        console.log(error)
    }
})
    ();