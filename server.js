// Workout-Tracker
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 8080;

const db = require("./models");


const app = express();

const databaseName = "workout_db"

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log(`Successfully connected to database: ${databaseName}`))

// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://shady-saleh:0550836852Sh%40Dy@cluster0.qg9qd.mongodb.net/workout-db?retryWrites=true&w=majority", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//    useCreateIndex: true,
//    useFindAndModify: false
// });

// mongoose.connect(`mongodb+srv://shady-saleh:0550836852Sh@Dy@cluster0.qg9qd.mongodb.net/workout_db?retryWrites=true&w=majority`, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//    useCreateIndex: true,
//    useFindAndModify: false
// })


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://shady-saleh:0550836852Sh%40Dy@cluster0.qg9qd.mongodb.net/workout-db?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//    const collection = client.db("test").collection("devices");
//    // perform actions on the collection object
//    client.close();
// });


// Requiring our routes

app.use("/api", require("./routes/api-routes.js"));
app.use("/", require("./routes/html-routes.js"));


app.listen(PORT, () => {
   console.log(`App running on port ${PORT}!`);
});