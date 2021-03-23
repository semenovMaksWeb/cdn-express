const rimraf = require('rimraf');
rimraf('./log/*', function () { console.log('done'); });