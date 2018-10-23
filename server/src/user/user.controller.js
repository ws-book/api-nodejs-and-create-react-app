import User from "./user.model";
import { templateJSON } from "./../template/template.json";
import { templateXML } from "./../template/template.xml";

module.exports.testxml = async (req, res, next) => {
  templateXML(res,[],1,'TEST Format XML.')
};  

module.exports.check = async (req, res, next) => {
  await User.findById(req.params.id, function (err, user) { 
    if(err)  templateJSON(res,[],1,'Not found data.')
    next();
  } );  
};   
  
module.exports.create = async (req, res) => {
  const user = new User(req.body);
  await user.save(function (err, user) {  
    if(err)  templateJSON(res,[],1,'Failed to add data.')
    templateJSON(res,user)
  }); 
 
};

module.exports.remove = async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  
  var output = {
    user_id : req.params.id
  }
  templateJSON(res,output) 
};

module.exports.list = async (req, res) => {
  const users = await User.find().select('-__v');
  if (users.length === 0) {
    templateJSON(res,users,1,'Not found data.')
  }else{
    templateJSON(res,users)
  } 
};

module.exports.update = async (req, res) => {
  const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).exec();

  templateJSON(res,user)
 
};

module.exports.view = async (req, res) => {
  const user = await User.findById(req.params.id);
  templateJSON(res,user)
};
 