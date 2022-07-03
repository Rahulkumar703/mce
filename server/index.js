const connect_DB = require('./db/DB');
const { fetchAdmin, insertAdmin, insertRegistration, fetchRegistration, updateAdmin, updateResitration, deleteAdmin, deleteRegistration } = require('./db/Curd');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
app.use(express.json());
dotenv.config();

connect_DB();

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', `${process.env.HOST_NAME}:3000`);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


// Insertion Routes
app.post('/api/mce/insert/admin', async (req, res) => {
    const data = req.body;
    const resp = await insertAdmin(data);
    res.json(resp);
});


app.post('/api/mce/insert/registration', async (req, res) => {
    const data = req.body;
    const resp = await insertRegistration(data);
    res.json(resp);
});





// Reading Routes
app.get('/api/mce/v1/fetch/admins', async (req, res) => {

    const resp = await fetchAdmin({});
    res.send(resp);
});
app.get('/api/mce/v1/fetch/registrations', async (req, res) => {

    const resp = await fetchRegistration({});
    res.send(resp);
});




// Updating Routes
app.get('/api/mce/v1/update/admin', async (req, res) => {
    const id = '62bd75c23a7c3ed179648373';
    const data = { name: 'devil' };
    const resp = await updateAdmin(id, data)
    res.send(resp);
});
app.get('/api/mce/v1/update/registration', async (req, res) => {
    const id = '62bd76eac205addca45cb9c7';
    const data = { name: 'rahul' };
    const resp = await updateResitration(id, data)
    res.send(resp);
});




// Deleting Routes
app.get('/api/mce/v1/delete/admin', async (req, res) => {
    const id = '62bd75c23a7c3ed179648373';
    const resp = await deleteAdmin(id)
    res.send(resp);
});
app.get('/api/mce/v1/delete/registration', async (req, res) => {
    const id = '62bd76eac205addca45cb9c7';
    const resp = await deleteRegistration(id)
    res.send(resp);
});



// listen
app.listen(process.env.PORT, () => {
    console.log('listening at http://localhost:' + process.env.PORT);
})



