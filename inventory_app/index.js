const express = require('express');

const server = express();

server.get('/', (req, res)=>{
    return res.send('node server from get request')
})

server.listen(3200);