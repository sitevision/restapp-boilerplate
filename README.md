# restapp-boilerplate
Boilerplate code for a simple RESTApp
## Setup
* `git clone https://github.com/sitevision/restapp-boilerplate.git`
* `cd restapp-boilerplate`
* `npm install`
* `npm run setup`
## Building
* `npm run create-addon` create an addon with the name configured in the setup task
* `npm run zip` compress `/src` into `/dist`
* `npm run deploy` compress `/src` into `/dist` and upload to the addon configured in the setup task
* `npm run force-deploy` compress `/src` into `/dist` and upload to the addon configured in the setup task. This will overwrite the current RESTApp if it has the same RESTApp-version defined in manifest.json