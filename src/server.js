import express from "express";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";
import initRoutes from "./routes/web";
let app = express();
//chay cau hinh ejs
configViewEngine(app);

//hiển thị dữ liệu với phương thức post
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


//gọi đến router
initRoutes(app);

let hostname = `localhost`;
let port = `3000`;
app.listen(port,hostname,()=>{
    console.log(`ban ket noi thanh cong den ${hostname}:${port}`);
})