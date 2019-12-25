const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Kdai:blockchainkmitl@cluster0-9oqtf.mongodb.net/KDAI?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

async function DBread(id) {
    await client.connect();
    const collection = await client.db("KDAI").collection("Document");
    data = await  collection.findOne({_id: id });
    await client.close();
    return data ;
  }
  module.exports = {
    DBread : DBread
  }