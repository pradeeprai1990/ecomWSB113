let express=require("express");
const multer = require("multer");
const { categoryInsert, categoryView } = require("../../controller/admin/CategoryContoller");

let categoryRoutes=express.Router();

let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/category")
    },
    filename:function(req,file,cb){

        cb(null,Date.now()+file.originalname)
    }
})

let uploads=multer({storage:storage})

categoryRoutes.post("/insert",uploads.single('categoryImage'),categoryInsert)

categoryRoutes.get('/view',categoryView)

module.exports={categoryRoutes}

//http://localhost:8000/admin/category/view