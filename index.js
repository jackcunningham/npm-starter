const express = require('express');
const app = express(); //Instantiate express for this server

//Routes
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

//Listen
app.listen(4000, () => {
    console.log("Now listening on port 4000"); 
});