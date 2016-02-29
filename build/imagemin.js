(function () {
  'use strict';

  var Imagemin = require('imagemin');

  new Imagemin()
    .src('src/images/pages/*.jpg')
    .dest('site/static/images')
    .use(Imagemin.jpegtran({progressive: true}))
    .run();
})();
