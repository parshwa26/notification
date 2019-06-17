console.log("hello");

/*var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');*/



//var serviceAcount = require("E:/React Native/notification/fir-storage-json.json");
var admin = require('firebase-admin');
admin.initializeApp();

var registrationToken = 'fTv_1Pha_ac:APA91bE3CUL3r7N7x6M41YLkIVUyCI8wTw82KuVAsOCkO5K_W2dMwoaud4rKh50Yvi_uJ8TfQV1QAlr4B2OzHVryX8yCUCp8bVJRdSd_awDdyabYGsfjTRyGU4cU2hQd7OQU3p4fuVcR';

var message = {
  notification: {
    title: '850',
    body: '2:45'
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });