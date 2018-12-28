let Todos = require('../models/todoModel')
let bodyParser = require('body-parser')

module.exports = (app) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/api/todos/:user', (req, res) => {
    Todos.find({ username: req.params.user },
      (err, todos) => {
        if (err) throw err;

        res.send(todos)
      })
  })

  app.get('/api/todo/:id', (req, res) => {
    Todos.findById({ _id: req.params.id },
      (err, todo) => {
        if (err) throw err;

        res.send(todo)
      })
  })

  app.post('/api/todo', (req, res) => {
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttach: req.body.hasAttach
      }, (err, todo) => {
        if (err) return err

        res.send('Success')
      })
    } else {
      newTodo = Todos({
        username: 'test',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttach: req.body.hasAttach
      })
      newTodo.save((err) => {
        if (err) return err

        res.send('Sucess')
      })
    }
  })

  app.delete('/api/todo', (req, res) => {
    Todos.findByIdAndRemove(req.body.id, (err) => {
      if (err) throw err;

      res.send('Sucess')
    })
  })
}