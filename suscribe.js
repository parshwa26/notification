

var admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://react-native-lea-1558524856962.firebaseio.com'
});


// These registration tokens come from the client FCM SDKs.
var registrationTokens = [
    'fM87EEFXpqQ:APA91bH9SAeX8izxxdNEi045-65Fml4fk2f81eyIigMow3mCx1tL19yZTa05OagIaGA9EXjL94XxK1bzWl5ECJc4nvMc0l1xiBDsl0nxq_8Ta9-c_aXwPJC8dSyr1lVwS7Y-Ub0YBOOM'
  ];
  
  // Subscribe the devices corresponding to the registration tokens to the
  // topic.
  topic="news"
  admin.messaging().subscribeToTopic(registrationTokens, topic)
    .then(function(response) {
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log('Successfully subscribed to topic:', response);
    })
    .catch(function(error) {
      console.log('Error subscribing to topic:', error);
    });