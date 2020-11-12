
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

const cors = require('cors');


app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();
// // Cors 

 const corsOptions ={
// 	// origin: ['http://localhost:3000','http://localhost:5000','http://localhost:3300']
 	origin: process.env.ALLOWED_CLIENTS.split(',')
// 	origin: ['http://hy-news.in/shareIT/']
 }
 
 app.use(cors(corsOptions))
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });


app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes 
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, console.log(`Listening on port ${PORT}.`));
