const mongoose=require("mongoose")

const jobSchema=new mongoose.Schema({
title:{
type:String,
},
totalopenings:{
    type:Number,
},
createdby:{
    type:mongoose.schema.Types.ObjectId,
    ref:'Boss',
},
vacanciesleft:{
    type:Number,
}
},
{timestamps:true});

module.exports=new mongoose.model("Job",jobSchema)