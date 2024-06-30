var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {
  // Check if the screen width is small
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Move all items to the hidden list
    $vlinks.children().appendTo($hlinks);

    // Show the dropdown button
    $btn.removeClass('hidden');
    $hlinks.removeClass('hidden');

    // Set the button count to the number of hidden items
    $btn.attr("count", 4);
  } else {
    // Move all items to the visible list
    $hlinks.children().appendTo($vlinks);

    // Hide the dropdown button
    $btn.addClass('hidden');
    $hlinks.addClass('hidden');

    // Set the button count to 0
    $btn.attr("count", 0);
  }
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
