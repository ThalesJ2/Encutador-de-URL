import knex from "knex";
import  dotenv from 'dotenv';
dotenv.config();

const connection  = knex({
  client: 'mysql2',
  connection: {
    host : process.env.db_host,
    port : process.env.db_port,
    user : process.env.db_user,
    password : process.env.db_password,
    database : process.env.db_name
  }
})
connection.raw("select 1").then(()=>{
  console.log("Conectado!");
}).catch((err)=>{
console.log(err);
})

export default connection;