import xml from "xml";

module.exports.templateXML = async (res,data,status = 0,msg = 'OK.') => {
    var output = {
        abc : 1
    }
    
    res.set('Content-Type', 'text/xml');
    var example4 = [ { toys: [ { _attr: { decade: '80s', locale: 'US'} }, { toy: 'Transformers' } , { toy: 'GI Joe' }, { toy: 'He-man' } ] } ];
    res.send(xml(example4, true));
    // res.json(output);
};