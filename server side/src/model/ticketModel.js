const mongoose = require("mongoose")

const ticketSchema = mongoose.Schema({
    Number:{
        type : Number,
        required: true
    },
    projectKey :{
     type:String
    },

    projectName :{
        type: String,
        required: true
    },
    
    createdAt : Date,

    priority :{
        type: String,
        enum :["Low","Medium","High"]
    },
    
    Description:{
        type: String ,
        required: true
    },
    
    summary :{
        type:String
    },

    Reporter :{
        type:String,
        required: true
    },
    
    Status :{
      type : String,
      required: true
    },
    updatedAt :Date,
    dueDate : {
        type : Date
    } 
},{timeStamp: true})


module.exports = mongoose.model("ticket",ticketSchema)