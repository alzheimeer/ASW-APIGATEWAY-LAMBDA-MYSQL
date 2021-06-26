const AWS = require('aws-sdk');


exports.handler = async (event) => {
    
    var isAuthorized = false
    
    const authHeaderPrefix = 'Bearer ';

    const CLIENT_ID = '192958602504-ckemkddjd5ujhhpfv4f1fnjhd1jnlgrk.apps.googleusercontent.com';
    const token = event.identitySource[0].substring(authHeaderPrefix.length);
    
    
    
    const {OAuth2Client} = require('google-auth-library');
    const client = new OAuth2Client(CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID
    })
    const payload = ticket.getPayload();
    const email = payload['email'];
    
    //Replace this map with a DynamoDB mapping
    const emailToRole = {
        'alzheimeer@gmail.com': 'arn:aws:iam::693772495255:user/alzheimeer ',
        // 'atul@verifiably.com': 'arn:aws:iam::558794228868:role/ExampleDev1',
        // 'alison.quintero@verifiably.com': 'arn:aws:iam::558794228868:role/ExampleDev1'
    };
    
    
    const roleToAssume = {RoleArn: emailToRole[email],
                    RoleSessionName: 'LendiupProxySession',
                    DurationSeconds: 900,};

    //Create the STS service object    
    const sts = new AWS.STS();
    const returned = await sts.assumeRole(roleToAssume).promise();
    isAuthorized = true;
    
    
    const response = {
        "isAuthorized": isAuthorized,
        "context": {
            "assumedRole": returned
        }
    };

    return response;
};