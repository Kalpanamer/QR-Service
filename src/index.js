// Import required modules
const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const { setEngine } = require('crypto'); 
const collection = require("./config");

// Initialize an instance of express
const app = express();
// convert data into json format 
app.use(express.json());

app.use(express.urlencoded({extended: false}));

// use ejs as the view setEngine
app.set('view engine', 'ejs');
console.log("Views directory:", app.get("views")); 
app.use(express.static("public")); 

// Route for the root URL ("/") - renders the login page
app.get("/", (req, res) => {
    res.render("login");
});
// Route for the "/signup" URL - renders the signup page
app.get("/signup",(req,res)=>{
    res.render("signup");
});

// Register user
app.post("/signup", async (req,res)=> {
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    //  Check if username is already in database
    const existinguser = await collection.findOne({name: data.name});
    if(existinguser) {
        res.send("User already exists. please choose a different username."); 
    }else{
        // hash the password using bcrypt
        const saltRounds = 10; //number of salt round for bcrypt
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword; //Replace the hash wit original password
        const userdata = await collection.create(data);
        console.log(userdata);
        res.render("login");
    }
});


// login user
app.post("/login",  async (req, res)=> {
    try{
        const check = await collection.findOne({name: req.body.username});
        if(!check) {
            res.send("username cannot found");
        }
        // compare the hash password from the database with the plain text
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if(isPasswordMatch) {
            res.render("home");
        }else{
            res.send("wrong password");
        }
    }catch{
        res.send("wrong Details");
    }
})


// Set the port number and start the server
const port = 5000;
app.listen(port,() => {
    console.log(`Server running on Port: ${port}`);
})