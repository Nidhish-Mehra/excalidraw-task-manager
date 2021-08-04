const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const { MONGOURI } = require('./config/keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

require('./models/todos')

app.use(express.json())
app.use(require('./routes/todos'))

mongoose.connection.on('connected',()=>{
    console.log("successfully connected to the database")
})
mongoose.connection.on('error',(error)=>{
    console.log("There was an error while connecting to the database: ",error)
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})