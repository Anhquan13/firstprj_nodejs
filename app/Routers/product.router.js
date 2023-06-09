module.exports = function(router){

    const productcontroller = require('../Controllers/product.controller')

    router.get('/product/list', productcontroller.get_lists);

    router.get('/product/:id', productcontroller.detail);

    router.post('/product/add', productcontroller.add_product);

    router.delete('/product/delete/:id', productcontroller.delete_product);

    router.put('/product/update', productcontroller.update_product);


}