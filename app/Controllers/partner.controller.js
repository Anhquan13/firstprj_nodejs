const partner = require('../Models/partner.model');

exports.get_list = function(req,res){
    console.log('lỗi cmnd111h');
    partner.get_all(function(data){
        console.log('lỗi cmndh');
        res.send({resutl: data})
    })
};

exports.partner_detail = function (req, res){
    partner.getByid(req.params.id, function (data){
        res.send({resutl: data})
    })
}

exports.add_partner = function (req, res){
    console.log('lỗi cmndh');
    var data = req.body;
    partner.create(data, function(temp){
        res.send({result: temp});
    })
}
exports.update_partner = function (req, res){
    var data = req.body;
    partner.update(data, function (temp){
        res.send({resutl: temp});
    })
}

exports.delete_partner = function (req, res){
    partner.remove(req.params.id, function (data){
        res.send({result: data})
    })
}
