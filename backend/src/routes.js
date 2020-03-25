const express = require('express');
const ongController = require('./controllers/ongController')
const incidentsController = require('./controllers/incidentsController') 
const profileController = require('./controllers/profileController') 
const sessionController = require('./controllers/sessionContrller')
const connection = require('./database/connection');


const routes = express.Router()

routes.post('/sessions', sessionController.create);

routes.get('/ongs',ongController.index );
routes.post('/ongs' , ongController.create );

routes.get('/profile' , profileController.index );

routes.post('/incidents', incidentsController.create );
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.delete);


module.exports = routes;