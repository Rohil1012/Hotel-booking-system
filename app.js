const express =  require('express');
const bodyParser = require('body-parser');
const path = require('path');
const contectusModel = require('./model/mdata');
const hoteldataModel = require('./model/hoteldata');




var mumbai = hoteldataModel.mumbaidata.find({});
var bekaal = hoteldataModel.bekaaldata.find({});
var bengaluru = hoteldataModel.bengalurudata.find({});
var hyderabad = hoteldataModel.hyderabaddata.find({});
var jaipur = hoteldataModel.jaipurdata.find({});
var jodhpur = hoteldataModel.jodhpurdata.find({});
var madikeri = hoteldataModel.madikeridata.find({});
var munnar = hoteldataModel.munnardata.find({});
var mussoorie = hoteldataModel.mussooriedata.find({});
var udaipur = hoteldataModel.udaipurdata.find({});
var blanck = hoteldataModel.blanckdata.find({});

var router = express.Router();

const app = express();

app.use(express.urlencoded({ extended:true}));
app.use('/css',express.static('css'));
app.use('/img',express.static('img'));
app.use('/js',express.static('js'));
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    res.render('home');
})




app.get("/rooms",(req,res)=>{ 
    res.render('rooms');
})
app.get("/booking",(req,res)=>{
    res.render('booking');
});
var myDateString = Date();
           
var city="";
var checkin = "";
var checkout = "";
var room = "";
var name = "";
var phone =  "";
var email =  "";
var numberofroom = "";
var adult = "";
var children = "";
var pickuppoint = "";
var rent = 0;
var gst = 0;
var payble = 0;
var count = 0;
var diffDays = 0;



app.post("/booking",(req,res)=>{

    city = req.body.city;
    checkin = req.body.checkin;
    checkout = req.body.checkout;
    room = req.body.room;
    name = req.body.name;
    phone = req.body.phone;
    email = req.body.email;
    numberofroom = req.body.numberroom;
    adult = req.body.adult;
    children = req.body.child;
    pickuppoint = req.body.pickup;
    datetime = myDateString;
   var rm = room.toString();
    if(rm == "Grand Presidential Suite"){
        rent = 100000;
    }else if(rm == "Grand Royal Suite"){
        rent = 80000;
    }else if(rm == "Royal Suite"){
        rent = 60000;
    }else if(rm == "Historical Suite"){
        rent = 45000;
    }else if(rm == "Palace Room"){
        rent = 28000;
    }else {
        rent = 20000;
    }
    const date1 = new Date(`${checkin}`)
    const date2 = new Date(`${checkout}`);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
     console.log(diffDays);
    gst = parseInt(numberofroom)*rent*0.18*diffDays;
    payble = parseInt(numberofroom)*rent*diffDays + gst;

   

    if(req.body.city == "Mumbai"){
        var hoteldetail = new hoteldataModel.mumbaidata({
            city : city,
            checkin : checkin,
            checkout : checkout,
            room : room,
            name : name,
            phone : phone,
            email : email,
            numberofroom : numberofroom,
            adult : adult,
            children : children,
            pickuppoint : pickuppoint,
            datetime : myDateString,
            });
    }else if(req.body.city == "Jodhpur"){
        var hoteldetail = new hoteldataModel.jodhpurdata({
            city : city,
            checkin : checkin,
            checkout : checkout,
            room : room,
            name : name,
            phone : phone,
            email : email,
            numberofroom : numberofroom,
            adult : adult,
            children : children,
            pickuppoint : pickuppoint,
            datetime : myDateString,
            });
    }else if(req.body.city == "Jaipur"){
        var hoteldetail = new hoteldataModel.jaipurdata({
            city : city,
            checkin : checkin,
            checkout : checkout,
            room : room,
            name : name,
            phone : phone,
            email : email,
            numberofroom : numberofroom,
            adult : adult,
            children : children,
            pickuppoint : pickuppoint,
            datetime : myDateString,
            });
    }else if(req.body.city == "Udaipur"){
        var hoteldetail = new hoteldataModel.udaipurdata({
            city : city,
            checkin : checkin,
            checkout : checkout,
            room : room,
            name : name,
            phone : phone,
            email : email,
            numberofroom : numberofroom,
            adult : adult,
            children : children,
            pickuppoint : pickuppoint,
            datetime : myDateString,
            });
    }else if(req.body.city == "Hyderabad"){
        var hoteldetail = new hoteldataModel.hyderabaddata({
            city : city,
            checkin : checkin,
            checkout : checkout,
            room : room,
            name : name,
            phone : phone,
            email : email,
            numberofroom : numberofroom,
            adult : adult,
            children : children,
            pickuppoint : pickuppoint,
            datetime : myDateString,
            });
    }else if(req.body.city == "Madikeri"){
        var hoteldetail = new hoteldataModel.madikeridata({
            city : city,
            checkin : checkin,
            checkout : checkout,
            room : room,
            name : name,
            phone : phone,
            email : email,
            numberofroom : numberofroom,
            adult : adult,
            children : children,
            pickuppoint : pickuppoint,
            datetime : myDateString,
            });
    }else if(req.body.city == "Bekaal"){
        var hoteldetail = new hoteldataModel.bekaaldata({
            city : city,
            checkin : checkin,
            checkout : checkout,
            room : room,
            name : name,
            phone : phone,
            email : email,
            numberofroom : numberofroom,
            adult : adult,
            children : children,
            pickuppoint : pickuppoint,
            datetime : myDateString,
            });
    }else if(req.body.city == "Munnar"){
        var hoteldetail = new hoteldataModel.munnardata({
            city : city,
            checkin : checkin,
            checkout : checkout,
            room : room,
            name : name,
            phone : phone,
            email : email,
            numberofroom : numberofroom,
            adult : adult,
            children : children,
            pickuppoint : pickuppoint,
            datetime : myDateString,
            });
    }else if(req.body.city == "Bengaluru"){
        var hoteldetail = new hoteldataModel.bengalurudata({
            city : city,
            checkin : checkin,
            checkout : checkout,
            room : room,
            name : name,
            phone : phone,
            email : email,
            numberofroom : numberofroom,
            adult : adult,
            children : children,
            pickuppoint : pickuppoint,
            datetime : myDateString,
            });
    }else{
        var hoteldetail = new hoteldataModel.mussooriedata({
            city : city,
            checkin : checkin,
            checkout : checkout,
            room : room,
            name : name,
            phone : phone,
            email : email,
            numberofroom : numberofroom,
            adult : adult,
            children : children,
            pickuppoint : pickuppoint,
            datetime : myDateString,
            });
    }
     
    hoteldetail.save()
    .then((result)=>{
        console.log("SUCESS");
        res.redirect('/booking1');
    })
    .catch((err)=>{
        console.log(err);
    })
    

   
});





app.get("/booking1",(req,res)=>{

    
    res.render("booking1",{data :{
        city1 : city,
        checkin1 : checkin,
        checkout1 : checkout,
        room1 : room,
        name1 : name,
        phone1 : phone,
        email1 : email,
        numberofroom1 : numberofroom,
        adult1 : adult,
        children1 : children,
        pickuppoint1 : pickuppoint,
        rent1 : rent,
        gst1 : gst,
        payble1: payble,
     } });
   
});


app.post("/booking1",(req,res)=>{
    res.render('tnx');
});

app.get("/tnx",(req,res)=>{
   
    res.render('tnx');
});

app.get("/cancle",(req,res)=>{
    blanck.exec((err,data)=>{
        if(err) throw err;
        res.render('cancle',{record : data});
    }); 
}) 

app.get("/recipt",(req,res)=>{
    blanck.exec((err,data)=>{
        if(err) throw err;
        res.render('recipt',{record : data});
    });
})

app.post("/re",(req,res)=>{
    
    var filtercity = req.body.filtercity;
    var filternumber = req.body.filternumber;

    
    var mumbaifilter = hoteldataModel.mumbaidata.find({phone:filternumber});
    var jodhpurfilter = hoteldataModel.jodhpurdata.find({phone:filternumber});
    var jaipurfilter = hoteldataModel.jaipurdata.find({phone:filternumber});
    var udaipurfilter = hoteldataModel.udaipurdata.find({phone:filternumber});
    var hyderabadfilter = hoteldataModel.hyderabaddata.find({phone:filternumber});
    var madikerifilter = hoteldataModel.madikeridata.find({phone:filternumber});
    var bekaalfilter = hoteldataModel.bekaaldata.find({phone:filternumber});
    var munnarfilter = hoteldataModel.munnardata.find({phone:filternumber});
    var bengalurufilter = hoteldataModel.bengalurudata.find({phone:filternumber});
    var mussooriefilter = hoteldataModel.mussooriedata.find({phone:filternumber});
    


    if(filtercity == "Mumbai"){

    mumbaifilter.exec((err,data)=>{
        
        if(err) throw err;
        res.render('recipt',{record : data});
    }); 
    }else if(filtercity == "Jodhpur"){
        
        jodhpurfilter.exec((err,data)=>{
            if(err) throw err;
            res.render('recipt',{record : data});
        }); 
    }else if(filtercity == "Jaipur"){
        
        jaipurfilter.exec((err,data)=>{
            if(err) throw err;
            res.render('recipt',{record : data});
        }); 
    }else if(filtercity == "Udaipur"){
        
        udaipurfilter.exec((err,data)=>{
            if(err) throw err;
            res.render('recipt',{record : data});
        }); 
    }else if(filtercity == "Hyderabad"){
        
        hyderabadfilter.exec((err,data)=>{
            if(err) throw err;
            res.render('recipt',{record : data});
        }); 
    }else if(filtercity == "Madikeri"){
        
        madikerifilter.exec((err,data)=>{
            if(err) throw err;
            res.render('recipt',{record : data});
        }); 
    }else if(filtercity == "Bekaal"){
        
        bekaalfilter.exec((err,data)=>{
            if(err) throw err;
            res.render('recipt',{record : data});
        }); 
    }else if(filtercity == "Munnar"){
        
        mumbaifilter.exec((err,data)=>{
            if(err) throw err;
            res.render('recipt',{record : data});
        }); 
    }else if(filtercity == "Bengaluru"){
        
        bengalurufilter.exec((err,data)=>{
            if(err) throw err;
            res.render('recipt',{record : data});
        }); 
    }else{
        mussooriefilter.exec((err,data)=>{
            
            if(err) throw err;
            res.render('recipt',{record : data});
        }); 
    }
});

app.post("/search",(req,res)=>{
    
    var filtercity = req.body.filtercity;
    var filternumber = req.body.filternumber;

    var mumbaifilter = hoteldataModel.mumbaidata.find({phone:filternumber});
    var mumbaifilter = hoteldataModel.mumbaidata.find({phone:filternumber});
    var jodhpurfilter = hoteldataModel.jodhpurdata.find({phone:filternumber});
    var jaipurfilter = hoteldataModel.jaipurdata.find({phone:filternumber});
    var udaipurfilter = hoteldataModel.udaipurdata.find({phone:filternumber});
    var hyderabadfilter = hoteldataModel.hyderabaddata.find({phone:filternumber});
    var madikerifilter = hoteldataModel.madikeridata.find({phone:filternumber});
    var bekaalfilter = hoteldataModel.bekaaldata.find({phone:filternumber});
    var munnarfilter = hoteldataModel.munnardata.find({phone:filternumber});
    var bengalurufilter = hoteldataModel.bengalurudata.find({phone:filternumber});
    var mussooriefilter = hoteldataModel.mussooriedata.find({phone:filternumber});
    


    if(filtercity == "Mumbai"){

    mumbaifilter.exec((err,data)=>{
        count=1;
        if(err) throw err;
        res.render('cancle',{record : data});
    }); 
    }else if(filtercity == "Jodhpur"){
        count=2;
        jodhpurfilter.exec((err,data)=>{
            if(err) throw err;
            res.render('cancle',{record : data});
        }); 
    }else if(filtercity == "Jaipur"){
        count=3;
        jaipurfilter.exec((err,data)=>{
            if(err) throw err;
            res.render('cancle',{record : data});
        }); 
    }else if(filtercity == "Udaipur"){
        count=4;
        udaipurfilter.exec((err,data)=>{
            if(err) throw err;
            res.render('cancle',{record : data});
        }); 
    }else if(filtercity == "Hyderabad"){
        count=5;
        hyderabadfilter.exec((err,data)=>{
            if(err) throw err;
            res.render('cancle',{record : data});
        }); 
    }else if(filtercity == "Madikeri"){
        count=6;
        madikerifilter.exec((err,data)=>{
            if(err) throw err;
            res.render('cancle',{record : data});
        }); 
    }else if(filtercity == "Bekaal"){
        count=7;
        bekaalfilter.exec((err,data)=>{
            if(err) throw err;
            res.render('cancle',{record : data});
        }); 
    }else if(filtercity == "Munnar"){
        count=8;
        mumbaifilter.exec((err,data)=>{
            if(err) throw err;
            res.render('cancle',{record : data});
        }); 
    }else if(filtercity == "Bengaluru"){
        count=9;
        bengalurufilter.exec((err,data)=>{
            if(err) throw err;
            res.render('cancle',{record : data});
        }); 
    }else{
        mussooriefilter.exec((err,data)=>{
            count=10;
            if(err) throw err;
            res.render('cancle',{record : data});
        }); 
    }
});

app.get("/delete/:id",(req,res)=>{
    var id = req.params.id;
    var del
    if(count==1){
        var del = hoteldataModel.mumbaidata.findByIdAndDelete(id);
    }else if(count == 2 ){
        var del = hoteldataModel.jodhpurdata.findByIdAndDelete(id);
    }else if(count == 3 ){
        var del = hoteldataModel.jaipurdata.findByIdAndDelete(id);
    }else if(count == 4){
        var del = hoteldataModel.udaipurdata.findByIdAndDelete(id);
    }else if(count == 5 ){
        var del = hoteldataModel.hyderabaddata.findByIdAndDelete(id);
    }else if(count == 6 ){
        var del = hoteldataModel.madikeridata.findByIdAndDelete(id);
    }else if(count == 7 ){
        var del = hoteldataModel.bekaaldata.findByIdAndDelete(id);
    }else if(count == 8 ){
        var del = hoteldataModel.munnardata.findByIdAndDelete(id);
    }else if(count == 9 ){
        var del = hoteldataModel.bengalurudata.findByIdAndDelete(id);
    }else{
        var del = hoteldataModel.mussooriedata.findByIdAndDelete(id);
    }

    del.exec((err,data)=>{
        if(err) throw err;
        res.redirect('/');
    }); 
    

   
}) 



app.get("/gallery",(req,res)=>{
    res.render('gallery');
});

app.get("/contectus",(req,res)=>{
    res.render('contectus');
});



app.post("/contectus",(req,res)=>{
    // console.log(req.body);
    // res.render('contectus');
    var detailcontect = new contectusModel({
        name: req.body.name,
        email : req.body.email,
        Phonenumber : req.body.phone,
        message : req.body.message,
        datetime : myDateString,
    });
    
   detailcontect.save()
   .then((result)=>{
       res.redirect('contectus');
   })
   .catch((err)=>{
       console.log(err);
   })
    console.log(detailcontect);
 
   
});


app.listen(80);

module.exports = router;

