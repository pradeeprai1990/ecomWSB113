const { categoryModel } = require("../../model/category/CategoryModel")

let categoryInsert=async (req,res)=>{

    let {categoryName,categoryDescription,status}=req.body

    let obj={
        categoryName:categoryName,
        categoryDesc:categoryDescription,
        categoryStatus:status
    }

    if(req.file){
        if(req.file.filename){
            obj['categoryImage']=req.file.filename
        }
    }

    try{
        let categoryInsert=new categoryModel(obj)
        let finalRes=await categoryInsert.save()  
        let resObj={
            status:1,
            'message':'Data Insert',
            finalRes
        }  
        res.send(resObj)
    }
    catch(error){
        let resObj={
            status:0,
            'message':'Error ',
            error
        }  
        res.send(resObj)
    }
   

}


let categoryView=async (req,res)=>{
    let categoryData= await categoryModel.find();
    let obj={
        status:1,
        path:process.env.CATEGORYIMAGEpath,
        data:categoryData
    }
    res.send(obj)
}


module.exports={categoryInsert,categoryView}