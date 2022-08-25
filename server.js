const express = require('express');
const path = require('path');

const app = express();
app.set('html', __dirname + '/client');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const messeges = [];

app.use(express.static(path.join(__dirname, 'client')));

app.get( '/', ( req, res ) => {
    res.sendFile('Index.html')
})

app.use((req, res) => {
    res.status(400).send('404 page not found...');
  });

app.listen(8000, () => {
    console.log('Server is running on port: 8000')
})