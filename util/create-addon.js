var
   request       = require('request');
   properties    = require('../util/properties');

(function () {
   var props = properties.getDevProperties(),
      url = `http://${props.username}:${props.password}@${props.domain}/rest-api/1/0/${props.siteName}/Addon%20Repository/headlesscustommodule`;

   request.post({url: url, form: {name: props.addonName, category: 'Other'}}, (err, httpResponse, body) => {
      if (err) {
         return console.error('Addon creation failed:', err);
      }

      if (httpResponse.statusCode === 200) {
         return console.log('Addon creation successful: \n', JSON.stringify(JSON.parse(body), null, 2));
      }

      return console.log('Addon creation failed: \n', JSON.stringify(JSON.parse(body), null, 2));
   });
})();