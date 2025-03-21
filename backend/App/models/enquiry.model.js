const e = require('express');
let mongoose = require('mongoose')

let enquirySchema = mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  email:{
    type: String,
    required:true,
    unique:true
  },
  phone:{
    type: String,
    required:true
  },
  message:{
    type: String,
    required:true
  },
});

let enquiryModel=mongoose.model("enquiry",enquirySchema);
module.exports=enquiryModel;