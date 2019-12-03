var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var csv = require('csv-express')
const fs = require("fs");

var registerSchema = new mongoose.Schema({
	app_id:Number,
	name: String,
    age: String,
    dob:String,
    fname:String,
    phno:String,
    religion:String,
    community:String,
    maths:Number,
    physics:Number,
    chemistry:Number,
    cutoff:Number,
	priority1: String,
	priority2: String,
	created_at: {type: Date, default: Date.now}
});
var app_id=1100;
mongoose.model('registerform',registerSchema);
var registerform = mongoose.model('registerform');
router.get('/',function(req,res,next){	
	res.render('Starter',{title:"LICET"});	
});

router.post('/registerationform',(req,res)=> {
	console.log("inner inside");
      app_id=app_id+1;
	  var newregisterform = new registerform();
	      newregisterform.app_id=app_id;
		  newregisterform.name=req.body.name;
		  newregisterform.age=req.body.age;
		  newregisterform.dob=req.body.dob;
		  newregisterform.fname=req.body.fname;
		  newregisterform.phno=req.body.phno;
		  newregisterform.religion=req.body.religion;
		  newregisterform.community=req.body.comm;
		  newregisterform.maths=req.body.maths;
		  newregisterform.physics=req.body.phys;
		  newregisterform.chemistry=req.body.chem;
		  newregisterform.cutoff=req.body.cutoff;
		  newregisterform.priority1=req.body.pri1;
		  newregisterform.priority2=req.body.pri2;
		  
		  newregisterform.save(function(err) {
			if (err){
				console.log('Error in  user: '+err);  
				throw err;  
			}
			console.log(' Registration form succesful send to DB');  
			return res.redirect('#/paymentpage'); 
		  });
	});
const filename1 = "Entire_details.csv";
const filename2= "Cutoff_based_list.csv";

	router.post('/getdatafromdb',(req,res)=>{
		console.log("inside db");
		var filter=req.body.filter;
		console.log("filter applied: "+filter);
		if(filter=="all"){
		registerform.find().lean().exec({},function(err,docs){
			if (err) res.send(err);
		res.statusCode = 200;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", 'attachment; filename='+filename1);
		res.csv(docs, true);
		res.render('displaytable.ejs',{data:docs});
		});		 
	}
	else{
		registerform.find().sort({cutoff:-1}).lean().exec({},function(err,docs){
			if (err) res.send(err);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", 'attachment; filename='+filename2);
        res.csv(docs, true);
		});		 
	}
	}); 

module.exports = router;