const messages = [
  {
    id: 0,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: 1,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const getMessages = (req, res) => {
  res.render('index', { messages });
};

const getMessage = (req, res) => {
  const { id } = req.params;
  const message = messages.find((message) => message.id === Number(id));
  res.render('open', {
    user: message.user,
    message: message.text,
    added: message.added.toDateString(),
  });
};

module.exports = {
  messages,
  getMessages,
  getMessage,
};
