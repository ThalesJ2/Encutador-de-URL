import express from "express";
import bodyParser from "body-parser";
import path from "path"
import { fileURLToPath } from "url";
import route from "./routes/routes.js";

const __filename = fileURLToPath(import.meta.url);
const  __dirname  =  path.dirname(__filename);
const app  = express();

app.set('views',path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(route);


app.listen(8080,()=>{
    console.log("App rodando");
});