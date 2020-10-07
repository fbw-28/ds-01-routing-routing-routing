const express = require('express');
const app = express();
const port = 5000;
const courses = require('./data.js');

console.log(courses);
/* 
app.get('/', (req, res) => {
  res.send('I am nothing');
});

app.get('/home', (req, res) => {
  res.send('I am homepage');
});

app.get('/contact', (req, res) => {
  res.send('I am contact page');
});
 */

app.get('/json', (req, res) => {
  res.json(courses);
});

app.get('/text', (req, res) => {
  const text = courses.join(', ');
  res.send(text);
});

app.get('/html', (req, res) => {
  const html = courses.map((course) => {
    return course === 'Data Server'
      ? `<li><b>${course}</b></li>`
      : `<li>${course}</li>`;
  });
  res.send(html.join(''));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
