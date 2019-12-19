const products = require('../controllers/products');
const keymaps = require('../controllers/keymaps');

module.exports = (app) => {

    app.get('/api/products', (req, res)                     => products.all(req, res));
    app.get('/api/product/:id', (req, res)                  => products.show(req, res));
    app.get('/api/product/byname/:name', (req, res)         => products.showbyname(req, res));
    app.post('/api/product/create', (req, res)              => products.create(req, res));
    app.put('/api/product/update/:id', (req, res)           => products.update(req, res));
    app.delete('/api/product/destroy/:id', (req, res)       => products.destroy(req, res));

    app.get('/api/onekeymap', (req, res)                    => keymaps.show(req, res));
    app.get('/api/keymap/create', (req, res)                => keymaps.create(req, res));
    // app.get('/api/keymap/create', (req, res)                => {console.log("at routes")});
    app.put('/api/keymap/update/:id', (req, res)            => keymaps.update(req, res));

}
