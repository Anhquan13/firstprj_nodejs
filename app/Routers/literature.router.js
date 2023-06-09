module.exports =function(router){

    const literaturecontroller = require('../Controllers/literature.controller')

    router.get('/literature/list', literaturecontroller.get_list);

    router.get('/literature/detail/:id', literaturecontroller.literature_detail);

    router.post('/literature/add', literaturecontroller.add_literature);

    router.delete('/literature/delete/:id', literaturecontroller.delete_literature);

    router.put('/literature/update', literaturecontroller.update_literature);


}
