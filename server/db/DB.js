const mongoose = require('mongoose');


const connect_DB = () => {

    mongoose.connect(process.env.CONNECTION_STRING, () => {
        console.log('Conection Established');
    })
}

module.exports = connect_DB;