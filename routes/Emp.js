const express = require('express')
const mysql = require('mysql2')
const router = express.Router()

var connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"rootpass",
  database:"mydb"
 });

connection.connect();

router.get('/', (request, response) => {
  connection.query("select id, e_name, email, emp_id, dname, doj from Employee_Tb", (error, result)=>{
    if(error==null)
    {
       var data = JSON.stringify(result) 
       response.setHeader("Content-Type","application/json");
       response.write(data);
      console.log(data);
      connection.end();
    }
    else
    {
        console.log(error)
        response.setHeader("Content-Type", "application/json");
        response.write(error);
    }
    response.end();
})
})

router.put("/:id", (request, response)=>{
  var query = `update Employee_Tb set dname = '${request.body.dname}',
                  doj = '${request.body.doj}' where id = ${request.params.id}`;

  connection.query(query, (error, result)=>{
                      if(error==null)
                      {
                          var data = JSON.stringify(result) 
                          response.setHeader("Content-Type","application/json");
                          response.write(data);
                      } 
                      else
                      {
                          console.log(error);
                          response.setHeader("Content-Type","application/json");
                          response.write(error)
                      }
                      response.end();
              })
})

router.delete("/:id", (request, response)=>{
  var query = `delete from Employee_Tb where id = ${request.params.id}`;
                  
  connection.query(query, (error, result)=>{
                      if(error==null)
                      {
                          var data = JSON.stringify(result) 
                          response.setHeader("Content-Type","application/json");
                          response.write(data);
                      } 
                      else
                      {
                          console.log(error);
                          response.setHeader("Content-Type","application/json");
                          response.write(error)
                      }
                      response.end();
              })
})

module.exports = router