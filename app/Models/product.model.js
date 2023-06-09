db = require('../common/connect');

const product = function () {
    this.product_id = product.product_id;
    this.pr_name = product.pr_name;
    this.pr_des = product.pr_des;
    this.pr_spec = product.pr_spec;
    this.image = product.image;
}
    product.get_all = function (resutl){
        db.query('select * from product', function (err, product){
            if(err){
                console.log(err);
            } else
                resutl(product);
        })
    }

    product.getByid = function (product_id, resutl){
        db.query('select * from product Where product_id = ?', product_id, function (err, product){
            if(err){
                console.log(err);
            } else resutl(product[0]);
        })
    }

    product.create = function (data, result){
        db.query('create into product set ?', data, function (err, product){
            if(err){
                console.log(err);
            } else result(product);
        })
    }

    product.remove = function (product_id, result){
        db.query('Delete from product where product_id = ?', product_id, function (err, product){
            if(err){
                console.log(err);
            } else result("Xóa thành công partner "+ product_id);
        })
    }

    product.update = function (data, result){
        db.query('update product set pr_name =?, pr_des =?, pr_spec = ?, image =? where product_id = ?', [data.pr_name, data.pr_des, data.pr_spec, data.product_id], function (err, product){
            if(err){
                console.log(err);
            } else result(product);
        })
    }

    module.exports = product;



