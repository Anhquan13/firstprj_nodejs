const savefile = require('../common/SaveFile');


exports.single1 = function (req,res, next){
    var file = req.files;
//    res.send(file);
    savefile.single(req.file);
    if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        res.send(error.message);
    }
    res.send(file);

}