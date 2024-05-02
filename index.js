const express = require('express')
const app = express()
const port = 3000

app.get('/index.html', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile('/mnt/c/Users/aanto/Desktop/Mio/Sito/index.html');
});

app.listen(port, () => console.log(`Local Server listening on port ${port}!`))
