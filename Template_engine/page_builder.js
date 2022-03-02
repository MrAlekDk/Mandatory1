const fs = require("fs")

const head = fs.readFileSync("./public/components/header/head.html").toString();
const header = fs.readFileSync("./public/components/header/header.html").toString();
const footer = fs.readFileSync("./public/components/Footer/footer.html").toString();

const fpContent = fs.readFileSync("./public/pages/Frontpage/frontpage.html").toString();
const jsPContent = fs.readFileSync("./public/pages/Js_practises/Js_practises.html").toString();
const nodeJsContent = fs.readFileSync("./public/pages/NodeJS/NodeJs.html").toString();
const terCmdContent = fs.readFileSync("./public/pages/TerminalCmd/terminalCmd.html").toString();
const toolsContent = fs.readFileSync("./public/pages/Tools/tools.html").toString();

const frontpage = head.replace("½½PLACEHOLDER_TITLE½½","Frontpage - Mandatory").replace("½½PLACEHOLDER_STYLESHEET½½","/Components/styles/frontpage.css") + header + fpContent + footer;
const jsPracPage = head.replace("½½PLACEHOLDER_TITLE½½","Js Practises - Mandatory").replace("½½PLACEHOLDER_STYLESHEET½½","/Components/styles/frontpage.css") + header + jsPContent + footer;
const nodeJsPage = head.replace("½½PLACEHOLDER_TITLE½½","NodeJS & Express - Mandatory").replace("½½PLACEHOLDER_STYLESHEET½½","/Components/styles/frontpage.css") + header + nodeJsContent + footer;
const terCmdpage = head.replace("½½PLACEHOLDER_TITLE½½","Terminal commands - Mandatory").replace("½½PLACEHOLDER_STYLESHEET½½","/Components/styles/frontpage.css") + header + terCmdContent + footer;
const toolsPage = head.replace("½½PLACEHOLDER_TITLE½½","Tools - Mandatory").replace("½½PLACEHOLDER_STYLESHEET½½","/Components/styles/frontpage.css") + header + toolsContent + footer;



module.exports ={
    "frontpage":frontpage,
    "jsPracPage":jsPracPage,
    "nodeJsPage":nodeJsPage,
    "terCmdPage":terCmdpage,
    "toolsPage":toolsPage
}