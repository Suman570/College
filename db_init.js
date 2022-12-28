const mongoose = require('mongoose');
const dbConfig = require('./configs/db.configs');

mongoose.set('strictQuery', true);

mongoose.connect(dbConfig.connectURL + '/' + dbConfig.dbName, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function(err,done){
    if(err){
        console.log('Db connection failed');
    }else{
        console.log('Database connection open');
    }
})