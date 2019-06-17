// The topic name can be optionally prefixed with "/topics/".
var admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://react-native-lea-1558524856962.firebaseio.com'
});


var topic = 'news';

var message = {
  data: {
    score: '850',
    time: '2:45'
  },
  topic: topic
};

// Send a message to devices subscribed to the provided topic.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });