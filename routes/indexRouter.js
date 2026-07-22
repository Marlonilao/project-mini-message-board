const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController');

indexRouter.get('/', indexController.getMessages);

indexRouter.get('/messages/:id', indexController.getMessage);

module.exports = indexRouter;
