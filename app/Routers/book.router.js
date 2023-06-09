module.exports = function(router){

    const bookcontroller = require('../Controllers/book.controller')



router.get('/book/list', bookcontroller.get_list);

router.get('/book/detail/:id', bookcontroller.detail);

router.post('/book/add', bookcontroller.add_book);

router.delete('/book/delete/:id', bookcontroller.remove_book);

router.put('/book/update/', bookcontroller.update_book);



};