let express=require("express");
const { categoryRoutes } = require("./admin/categoryRoutes");

let adminRoute=express.Router();

adminRoute.use("/category",categoryRoutes)


module.exports={adminRoute}