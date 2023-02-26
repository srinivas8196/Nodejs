const express = require('express')

const app = express();
const port = 3000;
const st_details = require("./details")

app.use(express.json()) // helps to enable json in file


//using send method
// app.get("/details",(req,res)=>
// {
//     res.send("Server started")
// })


//sending file as json

// app.get("/testing",(req,res)=>
// {
//      res.json({
//          message:"get request running for server",
//          login:true,
//          data:st_details,
//      })
// })


//setting port to 201 and sending file as json

app.get("/testing", (req, res) => {
    res.status(201).json({ data: st_details })
})


app.post("/register", (req, res) => {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    console.log(username,password,"we are geeting this values from req body");

    res.json({
        message: "Data received sucsessfully"
    })
})

app.listen(port, () => {
    console.log("Server started in port 3000");
})