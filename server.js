const express = require('express')

const app = express();
const port = 3000;
const data = require("./data.js")


// app.get("/info", (req,res) =>
// {
//     res.json({
//         message:"get request running for server",
//         login:true,
//         data:data
//     })

//     // res.send("Server already running")

// })


app.get("/info", (req,res) =>
{
    // res.json({
    //     message:"get request running for server",
    //     login:true,
    //     data:data
    // })

    res.status(201).json({data: data})

})



// This should always be written in bottom 

//menthod 1 using 3000 as number
// app.listen(3000 , ()=>
// {
//     console.log("server has started on port 3000");   // This should always be written in bottom 
// })

//method 2 using port variable 
app.listen(port , ()=>
{
    console.log("server has started on port 3000");   // This should always be written in bottom 
})