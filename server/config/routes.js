const #### = require('../controllers/####');

module.exports = (app) => {

    app.get('/api/tasks', (req, res)                    => tasks.all(req, res));
    app.get('/api/task/:id', (req, res)                 => tasks.show(req, res));
    app.post('/api/task/create', (req, res)             => tasks.create(req, res));
    app.put('/api/task/update/:id', (req, res)          => tasks.update(req, res));
    app.delete('/api/task/destroy/:id', (req, res)      => tasks.destroy(req, res));
    app.get('/api/task/complete/:id', (req, res)        => tasks.complete(req, res));


}
