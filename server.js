const express = require('express')
const courseModules = require('./data')
const app = express()
const port = 5000

const text = courseModules.join(", ") 

const list = courseModules.map(item =>
        `<li>${item}</li>`
).join("")
    
        
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
    console.log("Route with string")
    res.json(text)
})

//bonus html list
app.get('/html', (req, res) => {
    console.log("Route with html list")
    res.send(list)
})
