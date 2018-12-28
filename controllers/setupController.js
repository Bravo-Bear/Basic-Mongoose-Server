let Todos = require('../models/todoModel')

module.exports = (app) => {
  app.get('/api/setupTodos', (req, res) => {
    let starterTodos = [
      {
        username: 'test',
        todo: 'Buy milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Feed Dog',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Learn Node',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Learn JS',
        isDone: false,
        hasAttachment: false
      }
    ];

    Todos.create(starterTodos, (err, results) => {
      res.send(results)
    })
  })
}