module.exports.templateJSON = async (res,data,status = 0,msg = 'OK.') => {
    var output = {
        error : status,
        msg : msg,
        result : data
      }
    res.json(output);
};