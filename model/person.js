const mongoose=require('mongoose')

const carschema=new mongoose.schema({
    name:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    carno:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('car',carschema)