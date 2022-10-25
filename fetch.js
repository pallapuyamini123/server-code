const fetchRecord = async (db) => {
    let Find_data = await db.collection("yamini_test").findOne({ 'status': 0});
    console.log("data from fetch function", Find_data)
    //console.log( Find_data._id)
    if(Find_data !== null){
        await db.collection("yamini_test").updateOne({ _id: Find_data._id }, { $set:{'status': 1 }})
        console.log("updated");
        return {status:200,Find_data}

    }
     return {status:400}
  
}

module.exports = {
    fetchRecord
}