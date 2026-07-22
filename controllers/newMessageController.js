const { messages } = require('./indexController');

const getForm = (req, res) => {
  res.render('form');
};

const addMessage = (req, res) => {
  const { text, user } = req.body;
  const newMessage = {
    id: messages.length + 1,
    text: text,
    user: user,
    added: new Date(),
  };
  messages.push(newMessage);

  res.redirect('/');
};

module.exports = {
  getForm,
  addMessage,
};
