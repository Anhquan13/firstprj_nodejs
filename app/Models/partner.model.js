db = require('../common/connect');

const partner = function (){
    this.partner_id = partner.partner_id;
    this.name = partner.name;
    this.logo = partner.logo;
    this.content = partner.content;
}

partner.get_all = function(resutl){

    db.query("select * from partner", function (err,partner){
        if(err){
            resutl("hêloojfd");
        }
        else     resutl(partner);
    });
}

partner.getByid = function (partner_id, resutl){
    db.query("select * from partner where partner_id= ? ", partner_id, function (err, partner){
        if(err|| partner.length == 0){
            console.log(err);
        } else resutl(partner[0]);
    })
}

partner.create = function (data, result){
    db.query("insert INTO partner set name = ?, logo = ?, content = ?", [data.name, data.logo, data.content], function (err, partner){
        console.log(err);
        console.log(data);
        if(err){
            console.log(err);
        } else result(partner);
    })
}

partner.remove = function (partner_id, result){
    db.query("delete from partner where partner_id =?", partner_id, function (err, partner){
        if(err){
            console.log(err);
        } else result("Xóa thành công partner " + partner_id);
    })
}

partner.update = function (data, result){
    db.query("update partner set name = ?, logo = ?, content = ? where partner_id =?", [data.name, data.logo, data.content, data.partner_id], function (err, partner){
        if(err){
            console.log(data);
        } else result({data});
    })
}

module.exports = partner;