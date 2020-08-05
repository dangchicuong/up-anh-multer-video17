
import express from "express";
import {home,user} from "./../controllers/index";
//khai báo router là 1 express router
let router = express.Router();

//khởi tạo router
let initRoutes =(app) =>{
    router.get("/",home.getHome);  
    router.put("/user/update-avatar", user.updateAvatar);
    return app.use("/",router);
};

//xuất module
module.exports = initRoutes;

