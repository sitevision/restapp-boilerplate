//Uncomment when using self-signed or otherwise incorrect certificates
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var
   request       = require('request'),
   properties    = require('../util/properties'),
   queryString   = require('querystring'),
   chalk         = require('chalk');

(function () {
   var props = properties.getDevProperties(),
      url = `https://${encodeURIComponent(props.username)}:${encodeURIComponent(props.password)}@${props.domain}/rest-api/1/0/${queryString.escape(props.siteName)}/Addon%20Repository/headlesscustommodule`;

   request.post({url: url, form: {name: props.addonName}}, (err, httpResponse, body) => {
      if (err) {
         return console.error(`${chalk.red('Addon creation failed:')}, ${err}`);
      }

      if (httpResponse.statusCode === 200) {
         return console.log(`${chalk.green('Addon creation successful:')} \n${JSON.stringify(JSON.parse(body), null, 2)}`);
      }

      if (body) {
         console.log(`${chalk.red('Addon creation failed:')} \n${JSON.stringify(JSON.parse(body), null, 2)}`);
      } else {
         console.log(`${chalk.red('Addon creation failed, status code:')} ${httpResponse.statusCode}`);
      }
   });
})();
