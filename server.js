const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile('/Users/jameelgmail.com/Downloads/projects/project6/index.html');
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});