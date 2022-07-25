var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Nishantgpt619:NishantWorkPermit@workpermit.oqqm4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

var conn = mongoose.connection;

conn.on('connected', () => {
    console.log("connected");
})

conn.on("disconnected", () => {
    console.log("database is disconnected , kindly connect to a network");
})

conn.on("error", console.error.bind(console, "connection error:"));

module.exports = conn;
