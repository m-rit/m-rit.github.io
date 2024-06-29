var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {
  var availableSpace = $nav.width();

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {
    // Move all items to the hidden list
    $vlinks.children().appendTo($hlinks);

    // Show the dropdown button
    $btn.removeClass('hidden');
    $hlinks.removeClass('hidden');
  } else {
    // Move all items to the visible list
    $hlinks.children().appendTo($vlinks);

    // Hide the dropdown button if there is enough space
    if ($vlinks.width() <= availableSpace) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", $hlinks.children().length);
}

// Window listeners
$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
