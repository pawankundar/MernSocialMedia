const express = require("express");
const App = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require('multer')
const path = require('path')
require("dotenv").config();
const userRoute = require("./router/users");
const authRoute = require("./router/auth");
const postRoute = require("./router/posts")

App.use(express.json());
App.use(helmet({contentSecurityPolicy: false,}));
App.use(morgan("common"));
App.use("/api/users", userRoute);
App.use("/api/auth", authRoute);
App.use("/api/posts",postRoute)

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("database connected"))
  .catch((err) => console.log("error is ",err));

App.use('/images',express.static(path.join(__dirname,"public/images")))

//multer uploading images
const storage = multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null ,"public/images/")
  },
  filename : (req,filename,cb)=>{
    cb(null,req.body.name)
  }
})  
const upload = multer({storage : storage})

App.post('/api/upload',upload.single('file'),(req,res)=>{
  res.status(200).json({
    message : "file has been uploaded"
  })
})

App.listen(process.env.PORT, () => {
  console.log("server running");
});
