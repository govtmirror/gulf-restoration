(function () {
  'use strict';
  var sharp = require('sharp');
  var mkdirp = require('mkdirp');
  var fs = require('fs');

  var input = 'src/images/hero/';
  var output = 'site/static/images/hero/';
  var images = fs.readdirSync(input);

  // If there's a DS Store item, remove it
  var i = images.indexOf('.DS_Store');
  if (i > -1) images.splice(i,1);

  // Ensure the output dir exists
  images.forEach(function (name) {
    var dist = output + name.replace('.jpg', '/');

    mkdirp(dist, function (err) {
      if (err) console.error(err);

      var img = sharp(input + name);
      img
        .resize(1100)
        .toFile(dist + '1100.jpg');
      img
        .resize(800)
        .toFile(dist + '800.jpg');
      img
        .resize(400)
        .toFile(dist + '400.jpg');
    });
  });

})();
