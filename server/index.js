let express=require("express")
const mongoose = require('mongoose')
let cors=require("cors")
require("dotenv").config()
const { mainRoute } = require("./App/mainRoute")
let app=express()
app.use(cors())

app.use("/uploads/category",express.static("uploads/category"))

app.use("/uploads/product",express.static("uploads/product"))


app.use(express.json())




app.use(mainRoute)






mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
.then((res)=>{
    app.listen(process.env.SERVERPORT)
})

