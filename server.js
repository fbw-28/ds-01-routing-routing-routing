const express = require('express')
const courseModules = require('./data')
const app = express()
const port = 5000




//to start server
//to start browser npm run dev and http://localhost:5000/
app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

app.get('/json', (req, res) => {
    console.log("Route with all datas call")
    res.json(courseModules)
})
