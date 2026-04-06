const mongoose = require('mongoose');

//Connection logic
mongoose.connect(process.env.CONN_STRING);

//connection state
const db = mongoose.connection;

//Check DB Connection
db.on('connected', () => {
    console.log('DB Connection Successful!')
})

db.on('err', () => {
    console.log('DB Connection failed!');
})

module.exports = db;

