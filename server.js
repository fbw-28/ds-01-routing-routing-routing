const express = require('express');
const courses = require('./data');

const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.get('/', (req, res) => {
  res.json({ courses: courses });
});

app.get('/text', (req, res) => {
  res.json({ joined: courses.join() });
});

app.get('/html', (req, res) => {
  const htmlCourses = courses
    .map((course) =>
      course === 'Data Server'
        ? `<b><li>${course}</li></b>`
        : `<li>${course}</li>`
    )
    .join('');
  res.send(htmlCourses);
});
