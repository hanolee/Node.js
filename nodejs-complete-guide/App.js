const express = require('express');

const app = express()

app.use('/',(res,req,next) => {
    console.log('In next middleware');
    res.send('<h1>Im node js</h1>');
});

app.listen(3000);