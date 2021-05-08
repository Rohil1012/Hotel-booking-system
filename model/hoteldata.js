var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hotelcrown', {useNewUrlParser: true, useUnifiedTopology: true});

var con = mongoose.connection;
var hotelSchema =  new mongoose.Schema({
    city : String,
    checkin : String,
    checkout : String,
    room : String,
    name : String,
    phone : Number,
    email : String,
    numberofroom : Number,
    adult : Number,
    children : Number,
    pickuppoint : String,
    datetime : Date,
});

var mumbaidata = mongoose.model('Mumbai',hotelSchema);
var jodhpurdata = mongoose.model('Jodhpur',hotelSchema);
var jaipurdata = mongoose.model('Jaipur',hotelSchema);
var udaipurdata = mongoose.model('Udaipur',hotelSchema);
var hyderabaddata = mongoose.model('Hyderabad',hotelSchema);
var madikeridata = mongoose.model('Madikeri',hotelSchema);
var bekaaldata = mongoose.model('Bekaal',hotelSchema);
var munnardata = mongoose.model('Munnar',hotelSchema);
var bengalurudata = mongoose.model('Bengaluru',hotelSchema);
var mussooriedata = mongoose.model('Mussoorie',hotelSchema);
var blanckdata = mongoose.model('Blanck',hotelSchema);

// module.exports = jodhpurdata;

module.exports = {
    mumbaidata : mumbaidata,
    jodhpurdata : jodhpurdata,
    jaipurdata :  jaipurdata,
    udaipurdata : udaipurdata,
    hyderabaddata : hyderabaddata,
    madikeridata : madikeridata,
    bekaaldata : bekaaldata,
    munnardata : munnardata,
    bengalurudata : bengalurudata,
    mussooriedata : mussooriedata,
    blanckdata : blanckdata,
}

