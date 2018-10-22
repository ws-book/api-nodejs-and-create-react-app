import xml from "xml";

module.exports.templateXML = async (res,data = [],status = 0,msg = 'OK.') => {
  
    var template = [
        {
            app : [
                {
                    _attr : { version : "1.0.8" , lang : "tha" }
                },
                {
                    container : [
                        {
                            _attr : { lang : "tha" }
                        },
                        "data"
                    ]
                }
            ]
        }
    ]
    
    res.set('Content-Type', 'text/xml');
    res.send(xml(template, true));
};