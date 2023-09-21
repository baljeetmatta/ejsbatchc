const express=require("express");
const app=express();
const path=require("path");

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
res.render("home",{"name":"CodeQuotient",courses:["First","Second","Third"]});


   // res.sendFile(path.join(__dirname,"./public/home.html"))
})
app.listen(3000,(req,res)=>{
    console.log("Server Started..")
})