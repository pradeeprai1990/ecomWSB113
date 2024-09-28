const mongoose = require('mongoose')
let categorySchema=new mongoose.Schema({
    categoryName:{
        type:String,
        unique:true,
        required:true
    },
    categoryImage:String,
    categoryDesc:String,
    categoryStatus:Boolean

},
{
    timestamps:true
}

)

let categoryModel=mongoose.model("category",categorySchema)
module.exports={categoryModel}