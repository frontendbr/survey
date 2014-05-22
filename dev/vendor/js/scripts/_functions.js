(function(window, document, $, undefined) {

  "use strict";

  // ==================================================
  // Variables
  // ==================================================

      // Window size
  var sizeWindow = 0,
      mediaquery = {
        xxs: 480,
        xs: 767,
        sm: 768,
        md: 992,
        lg: 1200,
      },

      // Overlay
      overlay = $('[data-toggle="overlay"]'),

      // Touch events
      isTouchDevice = 'ontouchstart' in document.documentElement;


  // ==================================================
  // Resize
  // ==================================================

  window.sizeWindow = function(val) {
    if (val)
      sizeWindow = val;
    else
      return sizeWindow;
  };

  // ==================================================
  // Responsive rules
  // ==================================================

  // Less than 'Smallest'
  // --------------------------------------------------
  window.isMax_XXS = function () {
    return (sizeWindow < mediaquery.xxs);
  };

  // Less than 'Small'
  // --------------------------------------------------
  window.isMax_XS = function () {
    return (sizeWindow < mediaquery.xs);
  };

  // Less than 'Small'
  // --------------------------------------------------
  window.isMax_SM = function () {
    return (sizeWindow < mediaquery.sm);
  };

  // Less than 'Medium'
  // --------------------------------------------------
  window.isMax_MD = function () {
    return (sizeWindow < mediaquery.md);
  };

  // Less than 'Large'
  // --------------------------------------------------
  window.isMax_LG = function () {
    return (sizeWindow < mediaquery.lg);
  };

  // More than 'Smallest'
  // --------------------------------------------------
  window.isMin_XS = function () {
    return (sizeWindow >= mediaquery.xs);
  };

  // More than 'Small'
  // --------------------------------------------------
  window.isMin_SM = function () {
    return (sizeWindow >= mediaquery.sm);
  };

  // More than 'Medium'
  // --------------------------------------------------
  window.isMin_MD = function () {
    return (sizeWindow >= mediaquery.md);
  };

  // More than 'Large'
  // --------------------------------------------------
  window.isMin_LG = function () {
    return (sizeWindow >= mediaquery.lg);
  };

  // ==================================================
  // Swipe
  // ==================================================

  window.swipeTouch = function(_target, _targetContainer, _direction, _move) {
    if(isTouchDevice) {
      $(_targetContainer + ',' + _target).hammer({ drag_lock_to_axis: true }).on(_move, function(ev) {
        ev.gesture.preventDefault();
        var me = $(this);

        if (me.is(_targetContainer)) {
          me.carousel(_direction);
        } else {
          me.parents(_targetContainer).carousel(_direction);
        }
        return false;

      });
    }
  };

})( window, document, window.jQuery );

