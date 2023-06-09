const Book = require('../Models/book.model');
 

exports.get_list = function(req,res){
    Book.get_all(function(data){
        res.send({resutl: data})
    })
  
    
};

exports.detail = function(req,res){
    Book.getByid(req.params.id, function (data){
        res.send({resutl: data})
    });
};

exports.add_book = function(req,res){
    var data = req.body;
    Book.create(data,function(temp){
        res.send({resutl: temp})
    })
}
exports.remove_book = function (req, res){
    var id = req.params.id;
    Book.remove(id, function(temp){
        res.send({result: temp});
    })
}

exports.update_book = function (req, res){
    var data = req.body;
    Book.update(data, function (temp){
        res.send({resutl: temp});
            })
}


