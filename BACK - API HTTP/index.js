var AWS = require('aws-sdk'),
    region = "us-east-1",
    secretName = "mysql", //Parameter of secretManager Of DBMysql
    secret,
    decodedBinarySecret;

// Connection AWS Secret Manager
var client = new AWS.SecretsManager({
    region: region
});

exports.handler = async (event, context, callback) => {
    let results; //Data to return
    let up;  // Data entry
    
    // Recovery data secret connection 
    let data =  await client.getSecretValue({ SecretId: secretName }).promise();
    data = await JSON.parse(data.SecretString);
    
    // A module for managing MySQL connections at serverless scale
    // https://github.com/jeremydaly/serverless-mysql
    // npm i serverless-mysql
    const mysql = await require('serverless-mysql')({
        config: {
        host     : data.host,
        database : data.dbInstanceIdentifier,
        user     : data.username,
        password : data.password
        }
      });
      
      
      
    switch (event.routeKey) {
        
        // CRUD BASICO
        case "GET /":
          results = await mysql.query('SELECT * FROM users');
          mysql.quit();
          callback(null, results);
        break;
          
        case "GET /{id}":
          results = await mysql.query('SELECT * FROM users WHERE id=?', [event.pathParameters.id]);
          mysql.quit();
          callback(null, results);
        break;
                  
        case "PUT /{id}":
          up = JSON.parse(event.body);
          results = await mysql.query({
                                  sql: 'UPDATE users SET user=?, name=?, email=?  WHERE id=?',
                                  values: [up.user, up.name, up.email, event.pathParameters.id]
                                });
          mysql.quit();
          callback(null, results);
        break;
  
        case "POST /":
          results = await mysql.query({
                                  sql: 'INSERT INTO users SET user=?, name=?, email=?',
                                  values: [up.user, up.name, up.email]
                                });
          mysql.quit();
          callback(null, results);
        break;
        
        case "DELETE /{id}":
          results = await mysql.query('DELETE FROM users WHERE id=?', [event.pathParameters.id]);
          mysql.quit();
          callback(null, results);
        break;
        
        //ENVIO DE CUALQUIER QUERY POR METODO POST EN /querys
        case "POST /querys":
          up = JSON.parse(event.body);
          results = await mysql.query(up.query);
          mysql.quit();
          callback(null, results);
        break;
          
       
    }

    // if not entry in switch return event complete
    const response = {
        statusCode: 200,
        body: JSON.stringify({  event }),
        type: event.routeKey
    };
    return response;
};
