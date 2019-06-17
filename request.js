 request({
        url: 'https://fcm.googleapis.com/fcm/send',
        method: 'POST',
        headers: {
          'Content-Type' :' application/json',
          'Authorization': 'key=AIzaSyAA8__HDu1Y7hk1yAIqXIePX-YAW3wpSLg',
          'project_id': 'react-native-lea-1558524856962'
        },
        body: JSON.stringify(
          { "data": {'notification': notification, _id: _id, action: action},
            "registration_ids" : 'fM87EEFXpqQ:APA91bH9SAeX8izxxdNEi045-65Fml4fk2f81eyIigMow3mCx1tL19yZTa05OagIaGA9EXjL94XxK1bzWl5ECJc4nvMc0l1xiBDsl0nxq_8Ta9-c_aXwPJC8dSyr1lVwS7Y-Ub0YBOOM',
            "content_available": true,
          }
        )
      }, function(error, response, body) {
        if (error) { 
          console.error(error, response, body); 
        }
        else if (response.statusCode >= 400) { 
          console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body); 
        }
        else {
          console.log(response);
        }
      });