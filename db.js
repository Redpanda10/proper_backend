const mongoose=require('monogoose')
mogooseurl='mogodb://localhost/27017/cars'

mongoose.connect(mogooseurl)

const db=mongoose.connection

db.on('error',(error)=>console.error(error))

db.on('connected',()=>{
    console.log('MongoDB Connected')
})

db.on('disconnected',()=>{
    console.log('MongoDB Disconnected')
})

module.exports = db