(function($) {

  "use strict";

  // ==================================================
  // General
  // ==================================================

  // Prevent click
  // --------------------------------------------------
  $('a[href="#"]').click(function(ev) {
     ev.preventDefault();
  });

  // Choosen
  // --------------------------------------------------
  $('.f-select select').chosen({
    no_results_text: 'Sem resultados',
    disable_search_threshold: 10
  });

  // Tooltip
  // --------------------------------------------------
  $('[data-toggle="tooltip"]').tooltip();

  // TypeHead
  // --------------------------------------------------
  $('.typeahead').typeahead({
    name: 'accounts',
    local: [ 'Alabama' , 'Alaska' , 'Arizona' , 'Arkansas' , 'California' , 'Colorado' , 'Connecticut' , 'Delaware' , 'Florida' , 'Georgia' , 'Hawaii' , 'Idaho' , 'Illinois' , 'Indiana' , 'Iowa' , 'Kansas' , 'Kentucky' , 'Louisiana' , 'Maine' , 'Maryland' , 'Massachusetts' , 'Michigan' , 'Minnesota' , 'Mississippi' , 'Missouri' , 'Montana' , 'Nebraska' , 'Nevada' , 'New Hampshire' , 'New Jersey' , 'New Mexico' , 'New York' , 'North Dakota' , 'North Carolina' , 'Ohio' , 'Oklahoma' , 'Oregon' , 'Pennsylvania' , 'Rhode Island' , 'South Carolina' , 'South Dakota' , 'Tennessee' , 'Texas' , 'Utah' , 'Vermont' , 'Virginia' , 'Washington' , 'West Virginia' , 'Wisconsin' , 'Wyoming' ]
  });

  // Popover
  // --------------------------------------------------
  $('.popover-btn').popover();

  // Datepicker
  // --------------------------------------------------
  $('.btn-datepicker').datepicker({
    format: 'dd/mm/yyyy',
    language: 'pt-BR',
    autoclose: true,
    clearBtn: true
  });

  // Print
  $('a.print').click(function() {
    window.print();
    return false;
  });

  // Scroller
  // --------------------------------------------------
  $('.scroller').nanoScroller();

  // Social Media
  // --------------------------------------------------
  $('.btn-share').click(function() {
    $('.social-list, .social-media').toggleClass('in');
  });

  // Highlight Input
  // --------------------------------------------------
  $('input[placeholder], textarea[placeholder]').highlight();

  // ==================================================
  // Resize Document
  // ==================================================

  $(window).resize(function() {

    sizeWindow($(window).width());

    //
    // > Small devices
    // --------------------------------------------------

    if (isMax_XS()) {

    }

    //
    // < Small devices
    // --------------------------------------------------

    if (isMin_SM()) {

    }

    //
    // > Medium devices
    // --------------------------------------------------

    if (isMax_MD()) {

    }

    //
    // < Large devices
    // --------------------------------------------------

    if (isMin_LG()) {

    }

  });

  // Run the function on resize and when the page loads!
  $(window).resize();

  // ==================================================
  // Device Rules
  // ==================================================

  // Carousel function instructions
  //
  // 1. Target item (class, ex '.carousel .item')
  // 2. Target container (class, ex '.carousel')
  // 3. Direction (prev or next)
  // 4. Move (Hammer)

  // Carousel Swipe Right
  // --------------------------------------------------
  swipeTouch('.carousel .item', '.carousel', 'prev', 'swiperight, dragright');

  // Carousel Swipe Left
  // --------------------------------------------------
  swipeTouch('.carousel .item', '.carousel', 'next', 'swipeleft, dragleft');


})(jQuery);