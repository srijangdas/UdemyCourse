import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const today = new Date();
const currDay = today.getDay();

app.get("/", (req, res)=>{
    if(currDay=="6" || currDay=="0"){
        res.render(__dirname + "/views/index.ejs", {day:"weekend"});
    }else{
        res.render(__dirname + "/views/index.ejs", {day:"weekday"});
    }
    
});

app.listen(port, ()=>{
    console.log("Server Started");
});