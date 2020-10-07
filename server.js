const express = require("express")
const DCImodules =require("./Data")

const app = express()

const port =5000

app.listen(port,()=>{
    console.log(`start server on port ${port}`)
})


app.get("/DCImodules", (req,res)=>{
    console.log("the whole array as JSON to the browser")
    res.json(DCImodules)
})




