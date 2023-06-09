db = require('../common/connect');

const literature = function (){
    this.lit_id = literature.lit_id;
    this.name = literature.name;
    this.link = literature.link;
    this.image = partner.image;
}

literature.get_all = function(resutl){

    db.query("select * from literature", function (err,literature){
        if(err){
            resutl("hêloojfd");
        }
        else     resutl(literature);
    });
}

literature.getByid = function (lit_id, resutl){
    db.query("select * from literature where lit_id= ? ", lit_id, function (err, literature){
        if(err|| literature.length == 0){
            console.log(err);
        } else resutl(literature[0]);
    })
}

literature.create = function (data, result){
    db.query("insert INTO literature set name = ?, link = ?, image = ?", [data.name, data.link, data.image], function (err, literature){
        console.log(err);
        console.log(data);
        if(err){
            console.log(err);
        } else result(literature);
    })
}

literature.remove = function (lit_id, result){
    db.query("delete from literature where lit_id =?", lit_id, function (err, literature){
        if(err){
            console.log(err);
        } else result("Xóa thành công literature " + lit_id);
    })
}

literature.update = function (data, result){
    db.query("update literature set name = ?, link = ?, image = ? where lit_id =?", [data.name, data.link, data.image, data.lit_id], function (err, literature){
        if(err){
            console.log(data);
        } else result({data});
    })
}

module.exports = literature;