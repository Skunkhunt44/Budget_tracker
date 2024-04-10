const express = require('express');
const cors = require('cors');
const connectDb = require("./db/connect")
const authRoute = require('./Routes/AuthRoute')
const createError = require('http-errors')
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/', async (req,res,next)=>{
    res.send('hello from express')
})
app.use('/auth',authRoute)

app.use(async (req,res,next)=>{
  
    next(createError.NotFound())
})


app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({
        error:{
            status:err.status || 500,
            message:err.message
        }
    })
    
})






const start = async()=> {
    try {
        await  connectDb(process.env.MONGO_URI)
        app.listen(PORT,console.log(`server is listening on Port ${PORT}`))

        
    } catch (error) {
        console.log(error)
    }
}


start()





