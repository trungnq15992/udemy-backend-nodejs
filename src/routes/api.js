const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, 
    postUploadSingleFileApi, postUploadMultipleFilesApi } = require('../controllers/apiControllers');

const {
    postCreateCustomer, 
    postCreateArrayCustomer, 
    getCustomersAPI, 
    putUpdateCustomerAPI,
    deleteACustomerAPI,
    deleteArrayCustomerAPI
} = require('../controllers/customerControllers');

routerAPI.get('/', (req, res) => {
    res.send("Hello World")
});

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileApi);

routerAPI.post('/files', postUploadMultipleFilesApi);

routerAPI.post('/customers', postCreateCustomer);

routerAPI.post('/customers-many', postCreateArrayCustomer);

routerAPI.get('/customers', getCustomersAPI);

routerAPI.put('/customers', putUpdateCustomerAPI);

routerAPI.delete('/customers', deleteACustomerAPI);

routerAPI.delete('/customers-array', deleteArrayCustomerAPI);

module.exports = routerAPI;