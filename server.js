const express= require("express")
const app=express()
const port=3000
const db=require('./db')
const person=require('./model/person')
const bodyparser=require("body-parser")

app.use(bodyparser.json())


app.get("/", (req, res) => {
    res.send("Hello, World!")
})
app.post('/person',async(req, res) => {

})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})