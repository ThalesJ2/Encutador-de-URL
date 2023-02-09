import { Router } from "express";
import knex from "../database/connection.js"
import generate from "../util/generateLink.js";
const route =  Router();


route.get("/",(req,res)=>{
    return res.render("index",{url:undefined});
});

route.post("/url",async (req,res)=>{
    let {url} = req.body;
    let code = generate();

    if(url == '' || url == undefined)
    {
        return res.sendStatus(404);
    }
    else{
        try {
            let resultQuery = await knex.insert({url,code,}).table("dados");
            return res.redirect("/"+code);
        } catch (error) {

            console.log(error);
            return res.sendStatus(400);
        }
    }
});
route.get("/:link",(req,res)=>{

    let {link} = req.params;
    return res.render("index",{url:link});
});

route.get("/minor/:link?", async (req,res)=>{
    let {link} = req.params;
    try {
        let [{url}] =  await knex.select("url").from("dados").where({code:link});
        return res.redirect(url);
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }
});

export default route;