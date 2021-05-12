
const express = require('express'),
     http = require('http');

     require('dotenv').config();
const cors = require('cors');

const hostname = 'localhost';
const port = 5000;

const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database nikhil connection established successfully");
// })

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

app.use(cors());
app.use(bodyParser.json());

app.all('/', (req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});




const usersRouter = require('./routes/users');

const adminsRouter = require('./routes/admins');
const organizationsRouter = require('./routes/organizations');
const rolesRouter = require('./routes/roles');



app.use('/users', usersRouter);
app.use('/admins', adminsRouter);
app.use('/organizations', organizationsRouter);
app.use('/roles', rolesRouter);




const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});