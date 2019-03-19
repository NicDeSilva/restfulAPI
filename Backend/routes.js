const taskControllers = require('./controllers');

module.exports = app => {
  app
    .get('/api/tasks', taskControllers.getAllTasks)
    .get('/api/tasks/:id', taskControllers.getOneTask)
    .post('/api/tasks', taskControllers.createTask)
    .put('/api/tasks/:id', taskControllers.updateTask)
    .delete('/api/tasks/:id', taskControllers.deleteTask);
}