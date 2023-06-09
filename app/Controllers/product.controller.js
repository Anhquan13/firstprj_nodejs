const product = require('../Models/product.model');

exports.get_lists= function (req, res){
    product.get_all(function (data){
        console.log("lỗi cmdsks")
        res.send({result: data})
    })
};

exports.detail = function (req, res){
    product.getByid(res.params.id,function (data){
        console.log("lỗi cmnr")
        res.send({resutl: data})
        }
    )
};

exports.add_product = function (req, res){
    console.log('lỗi cmndh');
    var data = req.body;
    product.create(data, function(temp){
        res.send({result: temp});
    })
}

exports.update_product = function (req, res){
    var data = req.body;
    product.update(data, function (temp){
        res.send({resutl: temp});
    })
}

exports.delete_product = function (req, res){
    product.remove(req.params.id, function (data){
        res.send({result: data})
    })
}