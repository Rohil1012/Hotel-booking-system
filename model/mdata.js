var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hotelcrown', {useNewUrlParser: true, useUnifiedTopology: true});
var con = mongoose.connection;
var contactusSchema =  new mongoose.Schema({
    name: String,
    email : String,
    Phonenumber : Number,
    message : String,
    datetime : Date,
});

var contactusModel = mongoose.model('contectus',contactusSchema);

module.exports = contactusModel;


// var contectus = new contactusModel({
//     name:'mayank',
//     email:'may@gmail.com',
//     Phonenumber:'12345687',
//     message:'hi i',
// });

// console.log(contectus);
// con.on("connected",()=>{
//     console.log("Sucess");
// }); 

// con.on("disconnected",()=>{
//     console.log("didisSucess");
// });

// con.on('error', console.error.bind(console, 'connection error:'));

// con.once('open', function() {
//     contectus.save((err,res)=>{
//         if(err) throw error;
//         console.log(res);
//         con.close();
//     });
//   });