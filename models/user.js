const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
//     reservationID:String,
//     invoiceID:String
  
// });


const userSchema = new mongoose.Schema({

    userID:{type:String,unique:true},
    firstName:String,
    lastName:String,
    contact:{type:String,unique:true},
    country:String,
    address:String,
    city:String,
    postalCode:String,
    emailID:{type:String,unique:true},
    password:String,

  
},{versionKey: false });

const userModel = mongoose.model("master users", userSchema);

module.exports = userModel;