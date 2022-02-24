const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.static('Public'));

const fs = require("fs")

const head = fs.readFileSync("./public/components/header/head.html").toString();
const header = fs.readFileSync("./public/components/header/header.html").toString();
const footer = fs.readFileSync("./public/components/Footer/footer.html").toString();

const fpContent = fs.readFileSync("./public/pages/Frontpage/frontpage.html").toString();

const frontpage = head.replace("½½PLACEHOLDER_TITLE½½","Alexander Sørensen") + header + fpContent + footer;

app.get("/",(req,res)=>{

    res.send(frontpage)
});

app.listen(PORT,()=>{
    console.log("Server is now running on port",PORT)
});