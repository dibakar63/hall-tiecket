// const express =require('express')
// const dotenv=require("dotenv");
// const mongoose =require( "mongoose");
// const cookieParser=require("cookie-parser");
// const cors=require ("cors");

// const app=express();
// dotenv.config();

// //Database connect
// const db_connect=async()=>{
//     try {
       
//         await mongoose.connect(process.env.MONGO_DB_URL)
//          console.log("Connected to Mongodb")
//     } catch (error) {
//         throw error;
//     }
// }

// //middlewares
// app.use(cors())
// app.use(cookieParser())
// app.use(express.json())

// app.listen(8800,()=>{
//     db_connect()
//     console.log(`Server started on port 8800`)
// })


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dibakar43:zLKgNVzpsRCBahsB@cluster0.qzypx5k.mongodb.net/Hall_ticket";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Hall_ticket");
  dbo.collection("hall_ticket").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});