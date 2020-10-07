const express = require('express')
const courseModules = require('./data')
const app = express()
const port = 5000

/* 
const list = courseModules.map(item => {
    if (item === "Data Server") {
        return `<b><li>${item}</li></b>` 
    } else {
        return `<li>${item}</li>`
}}).join("") */

        
//to start server
//to start browser npm run dev and http://localhost:5000/
app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

app.get('/', (req, res) => {
    console.log("Route with all datas call")
    res.json(courseModules)
})

//bonus convert to string
app.get('/text', (req, res) => {
    const text = courseModules.join(", ") 
    console.log("Route with string")
    res.send(text)
})

//bonus html list
app.get('/html', (req, res) => {
    const list = courseModules.map(item => {
        return item === "Data Server" ? `<b><li>${item}</li></b>` : `<li>${item}</li>`
    }).join("")
    console.log("Route with html list")
    res.send(list)
})


