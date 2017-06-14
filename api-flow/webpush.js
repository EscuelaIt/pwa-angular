module.exports = app => {
  var webPush = require('web-push')
  webPush.setVapidDetails(
    'mailto:albertobasalo71@gmail.com',
    'BIc-16A58871P96L_Xzwb20vTA5FA40I-cNVv44kA2vWxvp_XEroB-mx6fVZedwzYy_dg6a0x6J5Es5bm8zRBTA',
    'REEqm8POjyvVMhrJqDxbTkx7QXNdsIUV3b86fN_BFZI'
  )
  var pushSubscriptions = [];

  app.post('/webpush', function (req, res, next) {
    console.log('Web push subscription object received: ', req.body.subscription);
    if (req.body.action === 'subscribe') {
      susbcribe(req.body.subscription);
    } else if (req.body.action === 'unsubscribe') {
      unsubscribe(req.body.subscription);
    }
    res.send({
      text: req.body.action + ' OK for ' + JSON.stringify(req.body.subscription),
      status: '200'
    });
  })

  app.sendNotification = function sendNotification(body, tag) {
    payload = getPayload(body, tag);
    pushSubscriptions.forEach(pushSubscription => {
      webPush.sendNotification(pushSubscription, payload)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error('Push error: ', error);
        })
    });
  }

  function getPayload(body, tag) {
    var notificationData = {};
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
      icon: '/assets/icons/chrome/chrome-extensionmanagementpage-48-48.png',
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

