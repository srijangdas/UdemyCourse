//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyparser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var authOK = false;

app.use(bodyparser.urlencoded({extended:true}));

function passCheck(req, res, next){
    const pass = req.body["password"];
    if(pass === "ILP"){
        authOK = true;
    }
    next();
}

app.use(passCheck);

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res)=>{
    if(authOK){
        res.sendFile(__dirname+"/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
});