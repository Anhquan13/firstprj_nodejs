module.exports = function(router){
const homecontroller = require('../Controllers/home.controller')
var JWT = require('../common/JsonWebToken')


router.get('/home', homecontroller.home);

router.get('/about', homecontroller.about);

router.get('/token', async function (req, res){
    var user = {
        name :"Admin",
        email: "admin@hihieh.com",
    };
    const _token = await JWT.make(user);
    res.send({ token: _token});
})
    router.get('/check_token', async function (req, res){
        try{
            var _token = "eyJhbdGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AaGloaWVoLmNvbSJ9LCJpYXQiOjE2ODUyMTQ4MTksImV4cCI6MTY4NTIxODQxOX0.DB3FD_lvSOTGKKKWHFniiBV1XIWk9gVgjC2JS1ovHpk"
            const data = await  JWT.check(_token);
            res.send({ data: data});
        } catch (err){
            res.send(err);
        }

    });
}
