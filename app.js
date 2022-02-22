const express = require("express");
const app = express();

app.use(express.static("public"))





app.listen(PORT,()=>{
    console.log("Server is now running on port",PORT)
})