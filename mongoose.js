var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:admin1224@clusterfirst.zwt6i.mongodb.net/mydb');
console.log("mongodb connect...")
module.exports=mongoose;