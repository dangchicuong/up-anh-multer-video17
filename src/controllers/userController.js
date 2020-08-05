import multer from "multer";

//khai bao noi luu
let storageAvatar = multer.diskStorage({
  destination : (req,file,callback) =>{
    callback(null,"public");
  },
  filename : (req,file,callback) =>{    
    /*thu debug va dung thi no k chay vao luon
    console.log("debug cai coi");
    return;
    */
    let avatarName = `${file.originalname}`;
    callback(null,avatarName);
  }
});

let avatarUploadFile = multer({
  storage : storageAvatar}).single("avatar");
let updateAvatar = (req,res) => {
  avatarUploadFile(req,res,(error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(req.file);
  });
  
};


module.exports = {
  updateAvatar : updateAvatar,
}