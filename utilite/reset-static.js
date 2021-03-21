const rimraf = require('rimraf');
rimraf('./public/*', function () { console.log('done'); });