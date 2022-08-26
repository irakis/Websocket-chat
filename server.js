const express = require('express');
const socket = require('socket.io');
const path = require('path');

const app = express();
const server = app.listen(8000, () => {
    console.log('Server is running on port: 8000')
})

//socket
const io = socket(server);
io.on('connection', (socket) => {
  console.log('New client! Its id – ' + socket.id);

  socket.on('message', (message) => { 
    messeges.push(message);
    socket.broadcast.emit( 'message', message );
    socket.on('disconnect', () => { console.log('Oh, socket ' + socket.id + ' has left') });
    console.log('I\'ve added a listener on message event \n');
  })
});


app.set('html', __dirname + '/client');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const messeges = [];

app.use(express.static(path.join(__dirname, 'client')));

app.get( '/', ( req, res ) => {
    res.sendFile('Index.html')
})

app.get('/favicon.ico', (req, res) => {
    res.status(204);
    res.end();
  });

app.use((req, res) => {
    res.status(400).send('404 page not found...');
  });

