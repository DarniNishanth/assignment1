// Requiring module
const express = require('express');
const path=require('path')
// Creating express object
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
// Handling GET request
app.get('/', (req, res) => { 
    res.sendFile(__dirname+'index.html') 
    res.end() 
}) 

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
