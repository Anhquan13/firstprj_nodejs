const db = require('../common/connect');

const book = function(){
    this.id = book.id;
    this.name = book.name;
    this.pw = book.pw;

}

book.get_all = function(resutl){

    db.query("select * from account", function (err,book){
        if(err){
            resutl("hêloojfd");
        }
        else     resutl(book);
    });
}
book.getByid = function(id, resutl  ){
    console.log(id);
    db.query("select * from account where id = ?",id,function (err,book){
        console.log (err,book);
        if(err|| book.length==0){
            resutl("hêlofojcfd");
        }
        else     resutl ( book[0]);
    });
}

book.create = function(data, resutl){
    db.query("INSERT INTO account set ?", data,function (err,book){
        console.log (err, book);
        if(err){
            resutl("lỗi cmnr");
        } else resutl({data});
//        console.log (err, book);
    })

}

book.remove = function(id, resutl){
    db.query("DELETE FROM account WHERE id =?", id, function (err, book){
        if(err){
            resutl(null);
        }
        else{
            resutl("xóa sách " + id +" thành công!!!!")
        }
    })
}

book.update = function (data, result){
    db.query ("UPDATE account SET name= ?, pw = ? WHERE id=?", [data.name, data.pw,data.id ],function (err, book) {
        console.log (err);
        if(err){
            result(null);
        }
        else {
            result({data})
        }
    })
}

module.exports = book;
