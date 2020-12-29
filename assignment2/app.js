const express = require('express');

const app = express()

app.use('/', (req, res, next) => {
    console.log('always running')
    next();
});
app.use('/about', (req,res,next) => {
    console.log('This is About');
    res.send('<h1>AboutAdfd</h1>');
})
app.use('/', (req, res, next) => {
    console.log('This is Home');
    res.send('<h1>Home</h1>');
} );



app.listen(3001);