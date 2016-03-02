(function () {
  'use strict';

  var sharp = require('sharp');
  var Imagemin = require('imagemin');
  var rename = require('gulp-rename');
  var mkdirp = require('mkdirp');
  var fs = require('fs');

  var input = 'src/images/news/';
  var output = 'site/static/images/news/';
  var images = fs.readdirSync(input);

  // If there's a DS Store item, remove it
  var i = images.indexOf('.DS_Store');
  if (i > -1) images.splice(i,1);

  mkdirp(output, function (err) {
    if (err) console.error(err);

    // Resize, then imagemin
    images.forEach(function (name) {
      var img = sharp(input + name);
      img
        .resize(300)
        .toBuffer(function (error, buffer) {
          imagemin(error, buffer, name);
        });
    });
  });

  function imagemin(error, buffer, name) {
    if (error) console.error(error);
    new Imagemin()
      .src(buffer)
      .dest(output)
      .use(rename(name))
      .use(Imagemin.jpegtran({progressive: true}))
      .run();
  }

})();
