const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
            type:String,
            required:true
    },
    status:{
            type:Boolean,
            required:true
    },
    created:{
        type:Date,
        required:true
    },
    due:{
        type:Date,
        required:true
    },
    completedOn:{
        type:Date
    },

})

mongoose.model("Todo",todoSchema)