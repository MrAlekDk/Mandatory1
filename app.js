const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.static('Public'));


const pages = require("./Template_engine/page_builder.js")

app.get("/",(req,res)=>{

    res.send(pages.frontpage)
});

app.get("/jspractises",(req,res)=>{
    res.send(pages.jsPracPage)
});

app.get("/nodejs&express",(req,res)=>{
    res.send(pages.nodeJsPage)
});

app.get("/terminalcommands",(req,res)=>{
    res.send(pages.terCmdPage)
});

app.get("/tools",(req,res)=>{
    res.send(pages.toolsPage)
});

app.listen(PORT,()=>{
    console.log("Server is now running on port",PORT)
});