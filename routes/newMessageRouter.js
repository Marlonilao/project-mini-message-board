const { Router } = require('express');
const newMessageRouter = Router();
const newMessageController = require('../controllers/newMessageController');

newMessageRouter.get('/', newMessageController.getForm);

newMessageRouter.post('/', newMessageController.addMessage);

module.exports = newMessageRouter;
