var rimraf = require('rimraf');

rimraf('./dist/!(.git|CNAME)', { glob: { nosort: true, silent: true } }, function() {});
