const express = require('express');
const socket = require('socket.io');
const path = require('path');

const app = express();
const server = app.listen(8000, () => {
    console.log('Server is running on port: 8000')
})

//socket
const io = socket(server);

const messeges = [];
let users = [];

io.on('connection', (socket) => {

  socket.on('join', (userName) => {
    users.push({ name: userName, id: socket.id });
  });
  
  socket.on('message', (message) => { 
    messeges.push(message);
    socket.broadcast.emit( 'message', message );
  });

  socket.on('disconnect', () => {
    const newUsers = users.filter(user => user.id != socket.id)
    users = newUsers
  });

});
    

app.set('html', __dirname + '/client');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



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

