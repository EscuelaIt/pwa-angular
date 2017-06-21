module.exports = app => {
  var webPush = require('web-push')
  webPush.setVapidDetails(
    'mailto:albertobasalo71@gmail.com',
    'BIc-16A58871P96L_Xzwb20vTA5FA40I-cNVv44kA2vWxvp_XEroB-mx6fVZedwzYy_dg6a0x6J5Es5bm8zRBTA',
    'REEqm8POjyvVMhrJqDxbTkx7QXNdsIUV3b86fN_BFZI'
  )
  var pushSubscriptions = [];

  app.post('/webpush', function (req, res, next) {
    const subscription = req.body.subscription;
    const action = req.body.action;
    console.log('Web push subscription object received: ', subscription);
    if (action === 'subscribe') {
      susbcribe(subscription);
    } else if (action === 'unsubscribe') {
      unsubscribe(subscription);
    }
    res.send({
      text: action + ' OK for ' + JSON.stringify(subscription),
      status: '200'
    });
  })

  app.sendNotification = function sendNotification(body, tag) {
    payload = getPayload(body, tag);
    pushSubscriptions.forEach(pushSubscription => {
      webPush.sendNotification(pushSubscription, payload)
        .then(response => console.log('sent: ', response))
        .catch(error => console.error('Push error: ', error))
    });
  }

  function getPayload(body, tag) {
    const localIcon = '/assets/icons/chrome/chrome-extensionmanagementpage-48-48.png';
    const notificationData = {};
    notificationData.notification = {
      actions: [
        {
          action: 'testAction',
          title: 'Test Action'
        },
        {
          action: 'otherAction',
          title: 'Other Action'
        }
      ],
      title: 'Cash-Flow',
      body: body,
      dir: 'auto',
      icon: localIcon,
      lang: 'en',
      renotify: true,
      requireInteraction: true,
      tag: tag,
      vibrate: [300, 100, 400],
      data: '/'
    };
    return JSON.stringify(notificationData);
  }

  function susbcribe(subscription) {
    var index = subscriptionIndex(subscription);
    if (index < 0) {
      pushSubscriptions.push(subscription)
      console.log('Subscription registered: ' + subscription.endpoint)
    } else {
      console.error('Subscription was already registered: ' + subscription.endpoint)
    }
  }

  function unsubscribe(subscription) {
    var index = subscriptionIndex(subscription);
    if (index >= 0) {
      pushSubscriptions.splice(subscriptionIndex, 1)
      console.log('Subscription unregistered: ' + subscription.endpoint)
    } else {
      console.error('Subscription was not found: ' + subscription.endpoint)
    }
  }

  function subscriptionIndex(subscription) {
    return pushSubscriptions.indexOf(s => {
      s.endpoint == subscription.endpoint;
    });
  }
}

