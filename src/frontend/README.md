git-manager-ui
==============

A UI for git-manager (https://github.com/albur/git-manager)

## Installation

```
npm install && bower install && npm start
```

starts the webserver and UI on `http://localhost:3002`. 

__NOTE__: The api endpoints are currently set up for a mock service on the current service. Change the 

```javascript 
angular.module('gitUiApp').value('apiHost', '');
```

in `public/js/app.js` (line 26) to connect to your git-manager service. 

Happy trails!


