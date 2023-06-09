const literature = require('../Models/literature.model');

exports.get_list = function(req,res){
    console.log('lỗi cmnd111h');
    literature.get_all(function(data){
        //console.log('lỗi cmndh');
        res.send({resutl: data})
    })
};

exports.literature_detail = function (req, res){
    literature.getByid(req.params.id, function (data){
        res.send({resutl: data})
    })
}

exports.add_literature = function (req, res){
    console.log('lỗi cmndh');
    var data = req.body;
    literature.create(data, function(temp){
        res.send({result: temp});
    })
}
exports.update_literature = function (req, res){
    var data = req.body;
    literature.update(data, function (temp){
        res.send({resutl: temp});
    })
}

exports.delete_literature = function (req, res){
    literature.remove(req.params.id, function (data){
        res.send({result: data})
    })
}
