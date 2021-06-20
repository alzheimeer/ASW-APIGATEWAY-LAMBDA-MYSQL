const mysql = require("mysql");

// Datos usando pool 
var pool = mysql.createPool({
  host: "lendiup.ccuvk0hypuej.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Zpwjiexxn193*",
  database: "lendiup",
  ssl: true
});


exports.handler = (event, context, callback) => {
    // TODO implement
    let x = 'Hola';
   
   
    switch (event.routeKey) {
        
        
      case "PUT /{id}":
        x = 'PUTID';
         context.callbackWaitsForEmptyEventLoop = false;
          pool.getConnection(function (err) {
          if (err) throw err;
          const up = JSON.parse(event.body);
          pool.query("UPDATE users SET name=?, secondname=?, surname=?, secondsurname=?, email=?, password=?  WHERE idusers=?", [up.name, up.secondname, up.surname, up.secondsurname, up.email, up.password, event.pathParameters.id], (error, result) => {
            if (error) throw error;
            else {
              callback(null, "Updated successfully!");
            }
          });
        });
        break;
        
        
      case "GET /{id}":
        x = 'GETID';
         context.callbackWaitsForEmptyEventLoop = false;
          pool.getConnection(function (err) {
          if (err) throw err;
          pool.query("SELECT * FROM users WHERE idusers=?", [event.pathParameters.id], (error, result) => {
            if (error) throw error;
            else {
              callback(null, result);
            }
          });
        });
        break;
        
        
      case "GET /":
        x = 'GET';
         context.callbackWaitsForEmptyEventLoop = false;
         pool.getConnection(function(err, connection) {
          pool.query("SELECT * FROM users", function (err, result) {
             if (err) throw err;
             
             else callback(null, result);
            
          });
        });
        break;
        
        
        
      case "POST /":
        x = 'POST';
         context.callbackWaitsForEmptyEventLoop = false;
         pool.getConnection((err) => {
          if (err) throw err;
          const up = JSON.parse(event.body);
          pool.query("INSERT INTO users SET name=?, secondname=?, surname=?, secondsurname=?, email=?, password=?",[up.name, up.secondname, up.surname, up.secondsurname, up.email, up.password], (error, result) => {
            if (error) throw error;
            else {
              callback(null, "Inserted successfully!");
            }
          });
        });
        break;
        
      case "DELETE /{id}":
        x = 'DELETE';
         context.callbackWaitsForEmptyEventLoop = false;
          pool.getConnection(function (err) {
          if (err) throw err;
          pool.query("DELETE FROM users WHERE idusers=?", [event.pathParameters.id], (error, result) => {
            if (error) throw error;
            else {
              callback(null, "Removed successfully!");
            }
          });
        });
        break;
     
      }
      
    const response = {
        statusCode: 200,
        body: JSON.stringify({  event }),
        event: event.routeKey
    };
    return response;
};
