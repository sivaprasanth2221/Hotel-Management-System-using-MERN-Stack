const mongoose = require("mongoose");

var mongoURL = "mongodb://localhost:27017/hotel";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true});

var connection = mongoose.connection;

connection.on('error', ()=>{
    console.log('MongoDB connection Fail!')
})

connection.on("connected", () => {
  console.log("MongoDB connection succesfull");
});

module.exports = mongoose