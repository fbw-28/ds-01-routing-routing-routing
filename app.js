const express = require("express");
const app = express();
const server = require("./config/server");

//dci courses
const {courses} = require("./data");


// GET -> @/json
app.get("/json",(req,res)=>{
    res.send(courses);
})
// GET -> @/text
app.get("/text",(req,res)=>{
    const joinCourses = courses.join(", ");
    res.send(joinCourses)
})
// GET -> @/html
app.get("/html",(req,res)=>{

    const createList= courses.map(course=>`<li>${course}</li>`)
    console.log(createList)
    res.send(`<ul>${createList}</ul>`);
})

//server connection
server(app);
