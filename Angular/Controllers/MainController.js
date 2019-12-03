// main.controller("MainController", function ($scope) {
//     $scope.ABC = "ABC";
//     $scope.phones = [
//     {'name': 'Nexus S',
//      'snippet': 'Fast just got faster with Nexus S.'},
//     {'name': 'Motorola XOOM™ with Wi-Fi',
//      'snippet': 'The Next, Next Generation tablet.'},
//     {'name': 'MOTOROLA XOOM™',
//      'snippet': 'The Next, Next Generation tablet.'}
//   ];
// });
// main.controller("MainController", function ($scope,$http) {
//   $scope.reg_state = '';

// $scope.registerform=function(){
//   console.log("Proceding for registering form of "+$scope.user);
//       $http.post("/registrationform", function(req,res){ 
        
//         var mongoose = require('mongoose');   
//         var registerSchema = new mongoose.Schema({
//           name: String,
//             age: String,
//             dob:String,
//             fname:String,
//             phno:String,
//             religion:String,
//             community:String,
//             maths:Integer,
//             physics:Integer,
//             chemistry:Integer,
//             cutoff:Integer,
//           priority1: String,
//           priority2: String,
//           created_at: {type: Date, default: Date.now}
//         });
//       mongoose.model('registerform',registerSchema);
// var registerform = mongoose.model('registerform');

// app.use('/registrationform',function(req,res) {
//     var newregisterform = new registerform();
//         newregisterform.name=req.body.name;
//         newregisterform.age=req.body.age;
//         newregisterform.dob=req.body.dob;
//         newregisterform.fname=req.body.fname;
//         newregisterform.phno=req.body.phno;
//         newregisterform.religion=req.body.religion;
//         newregisterform.community=req.body.comm;
//         newregisterform.maths=req.body.maths;
//         newregisterform.physics=req.body.phys;
//         newregisterform.chemistry=req.body.chem;
//         newregisterform.cutoff=req.body.cutoff;
//         newregisterform.priority1=req.body.pri1;
//         newregisterform.priority2=req.body.pri2;
        
//         newregisterform.save(function(err) {
//           if (err){
//               console.log('Error in RRRRRRRRRRRRRRRRRRRRRRRRRRR user: '+err);  
//               $scope.reg_state="fail"
//               throw err;  
//           }
//           $scope.reg_state="done"
//           console.log(' Registration form succesful send to DB');    
//         });
// })

          
//         })
//       } 
     
// })