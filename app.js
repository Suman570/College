const express = require('express');
const app = express();
const PORT = 1010;

// Initinlizing database connection
require('./db_init');

const API_ROUTER = require('./api_route')

app.use('/api', API_ROUTER);

// 404 errror handler
app.use(function(req,res,next){
    next({
        msg: "Page not found",
        status: 404
    })
})

// Error handiling middleware
app.use(function(err,req,res,next){
    res.status(err.status || 400);
    res.json({
        msg: err.msg || err,
        status: err.status || 400
    })
})

app.listen(PORT, function(err,done){
    if(err){
        console.log('Error while listening to server');
    }else{
        console.log('Server is listening at PORT ', PORT);
    }
})