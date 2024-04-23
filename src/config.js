const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/seju");

connect.then( () => {
    console.log("Database connected Successfully");
})
.catch((err) => {
    console.log("Databse cannot be connected" ,err);
});
// create a schema
const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
// collection part
const collection = new mongoose.model("users",LoginSchema);

module.exports = collection;