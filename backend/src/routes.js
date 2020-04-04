const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate')

const ongController = require('./controllers/ongController')
const incidentsController = require('./controllers/incidentsController') 
const profileController = require('./controllers/profileController') 
const sessionController = require('./controllers/sessionContrller')

const routes = express.Router()

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}),sessionController.create);

routes.get('/ongs',ongController.index );

routes.post('/ongs' , celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email:  Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().length(2)
    })
}),ongController.create );

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}),profileController.index );

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
}),incidentsController.create );

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().optional()
    })
}),incidentsController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),incidentsController.delete);


module.exports = routes;