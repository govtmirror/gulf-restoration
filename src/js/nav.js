(function () {
  'use strict';

  var toggle = document.querySelector('.toggle-nav');
  var nav = document.querySelector('.main-nav');
  var activeClass = 'active';

  toggle.addEventListener('click', function (e) {
    if (hasClass(nav, activeClass)) removeClass(nav, activeClass);
    else addClass(nav, activeClass);
  });

  function trim (str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
  }

  function splitWords (str) {
    return trim(str).split(/\s+/);
  }

  function getClass (el) {
    return el.className.baseVal === undefined ? el.className : el.className.baseVal;
  }

  function hasClass (el, name) {
    if (el.classList !== undefined) {
      return el.classList.contains(name);
    }
    var className = getClass(el);
    return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
  }

  function addClass (el, name) {
    if (el.classList !== undefined) {
      var classes = splitWords(name);
      for (var i = 0, len = classes.length; i < len; i++) {
        el.classList.add(classes[i]);
      }
    } else if (!hasClass(el, name)) {
      var className = getClass(el);
      setClass(el, (className ? className + ' ' : '') + name);
    }
  }

  function removeClass (el, name) {
    if (el.classList !== undefined) {
      el.classList.remove(name);
    } else {
      setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
    }
  }

})();
