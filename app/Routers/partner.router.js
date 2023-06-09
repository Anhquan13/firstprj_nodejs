module.exports =function(router){

    const partnercontroller = require('../Controllers/partner.controller')

router.get('/partner/list', partnercontroller.get_list);

router.get('/partner/detail/:id', partnercontroller.partner_detail);

router.post('/partner/add', partnercontroller.add_partner);

router.delete('/partner/delete/:id', partnercontroller.delete_partner);

router.put('/partner/update', partnercontroller.update_partner);


}
