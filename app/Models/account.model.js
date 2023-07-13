const db = require('../common/connect');

const account = function(){
    this.id = account.id;
    this.name = account.name;
    this.pw = account.pw;

}

account.get_all = function(resutl){

    db.query("select * from account", function (err,account){
        if(err){
            resutl("hêloojfd");
        }
        else     resutl(account);
    });
}
account.getByid = function(id, resutl  ){
    console.log(id);
    db.query("select * from account where id = ?",id,function (err,account){
        console.log (err,account);
        if(err|| account.length==0){
            resutl("hêlofojcfd");
        }
        else     resutl ( account[0]);
    });
}

account.create = function(data, resutl){
    db.query("INSERT INTO account set ?", data,function (err,account){
        console.log (err, account);
        if(err){
            resutl("lỗi cmnr");
        } else resutl({data});
//        console.log (err, account);
    })

}

account.remove = function(id, resutl){
    db.query("DELETE FROM account WHERE id =?", id, function (err, account){
        if(err){
            resutl(null);
        }
        else{
            resutl("xóa sách " + id +" thành công!!!!")
        }
    })
}

account.update = function (data, result){
    db.query ("UPDATE account SET name= ?, pw = ? WHERE id=?", [data.name, data.pw,data.id ],function (err, account) {
        console.log (err);
        if(err){
            result(null);
        }
        else {
            result({data})
        }
    })
}

account.check_login = function (data, result){
    db.query("Select name from account where id = ? and pw = ?", [data.id, data.pw], function (err, account){
        if (err || account.length == 0){
            result(null);
        }
        else {
            result(account[0]);
        }
    });
}


module.exports = account;
