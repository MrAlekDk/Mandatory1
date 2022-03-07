const fs = require("fs")
const notes = require("./text.json")

const head = fs.readFileSync("./Public/Components/header/head.html").toString();
const header = fs.readFileSync("./Public/Components/header/header.html").toString();
const footer = fs.readFileSync("./Public/Components/Footer/footer.html").toString();

const fpContent = fs.readFileSync("./Public/Pages/Frontpage/frontpage.html").toString();
const jsPContent = fs.readFileSync("./Public/Pages/Js_practises/Js_practises.html").toString();
const nodeJsContent = fs.readFileSync("./Public/Pages/NodeJS/NodeJs.html").toString();
const terCmdContent = fs.readFileSync("./Public/Pages/TerminalCmd/terminalCmd.html").toString();
const toolsContent = fs.readFileSync("./Public/Pages/Tools/tools.html").toString();

const frontpage = head.replace("½½PLACEHOLDER_TITLE½½","Frontpage - Mandatory").replace("½½PLACEHOLDER_STYLESHEET½½","/Components/styles/frontpage.css") + header + fpContent + footer;
const jsPracPage = head.replace("½½PLACEHOLDER_TITLE½½","Js Practises - Mandatory").replace("½½PLACEHOLDER_STYLESHEET½½","/Components/styles/notes.css") + header + jsPContent + rowBuilder(notes.filter(note => note.category ==="Javascript"))+ footer;
const nodeJsPage = head.replace("½½PLACEHOLDER_TITLE½½","NodeJS & Express - Mandatory").replace("½½PLACEHOLDER_STYLESHEET½½","/Components/styles/notes.css") + header + nodeJsContent + rowBuilder(notes.filter(note => note.category ==="NodeJs"))+footer;
const terCmdpage = head.replace("½½PLACEHOLDER_TITLE½½","Terminal commands - Mandatory").replace("½½PLACEHOLDER_STYLESHEET½½","/Components/styles/notes.css") + header + terCmdContent + rowBuilder(notes.filter(note => note.category ==="TerminalCMDS"))+footer;
const toolsPage = head.replace("½½PLACEHOLDER_TITLE½½","Tools - Mandatory").replace("½½PLACEHOLDER_STYLESHEET½½","/Components/styles/notes.css") + header + toolsContent + rowBuilder(notes.filter(note => note.category ==="Tools"))+footer;


function rowBuilder(notes){
    
    let id =1;
    let rows = `<table id="table">`
    rows += notes.map(note => {
        return `<tr class="note-box">
        <td><h2>${note.title}<h2></td>
        <td>${note.text}</td>
        <td class="image-container"><img id="myImg${id++}" src="${note.imgPath}"></td></tr>`}).join("")
    rows+=`</table>`
    return rows;
}

module.exports ={
    "frontpage":frontpage,
    "jsPracPage":jsPracPage,
    "nodeJsPage":nodeJsPage,
    "terCmdPage":terCmdpage,
    "toolsPage":toolsPage
}