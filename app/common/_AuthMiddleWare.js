let isAuth = async  function (req, res, next){

    var  _JWT = require('./JsonWebToken');
    var _token = req.headers.authorization;
    if(_token){
 //       return res.send({data: "heheh"})
        try{
            var authData = await _JWT.check(_token);
            req.auth = authData;
            next();
        } catch (err){
            return res.send({data: "Mã không hợp lệ"});
        }
    }else {
        return res.send({data: "Chưa gửi kèm token"});
    }
    console.log(req.headers);

}

module.exports = {
    isAuth : isAuth
}