const express = require('express');
const dciModules = require('./data');

const app = express()
const port = 5000;
app.listen(port, () => {
    console.log(`Succes! Server started on port ${port}. Happy hacking!`)
})

app.get('/', (req, res) => {
    res.send('<h3>Hello!<br><br>Go to <a href="http://localhost:5000/json">http://localhost:5000/json</a> to see the jsonified array :D</h3><h3>Go to <a href="http://localhost:5000/text">http://localhost:5000/text</a> to see the stringified array :D</h3><h3>Go to <a href="http://localhost:5000/html">http://localhost:5000/html</a> to see the listed HTML :D</h3>')
})

app.get('/json', (req, res) => {
    res.json(dciModules)
})

app.get('/text', (req, res) => {
    // res.json(dciModules.toString())would work too without spaces
    res.json(dciModules.join(', '))
})


app.get('/html', (req, res) => {
    const dciModulesToHtml = dciModules.map(list => {
        return list === "Data Server" ? `<b><li>${list}</li></b>` : `<li>${list}</li>`
    })
    res.send(dciModulesToHtml.join(''))
})