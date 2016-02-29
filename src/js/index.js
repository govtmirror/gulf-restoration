(function () {
  'use strict';

  var dom = require('./util.dom');

  var toggle = document.querySelector('.toggle-nav');
  var nav = document.querySelector('.main-nav');
  var activeClass = 'active';

  toggle.addEventListener('click', function (e) {
    dom.toggleClass(nav, activeClass);
  });

})();
