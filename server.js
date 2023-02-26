const express = require('express')

const app = express();
const port = 3000;


app.get("/info", (req,res) =>
{
    // res.json({
    //     message:"get request running for server"
    // })

    res.send("Server already running")
})


// This should always be written in bottom 


app.listen(3000 , ()=>
{
    console.log("server has started on port 3000");   // This should always be written in bottom 
})