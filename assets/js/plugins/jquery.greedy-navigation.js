var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Move all items to the hidden list
    $vlinks.empty();

    // Show the dropdown button and hidden links
    $btn.removeClass('hidden');
    $hlinks.removeClass('hidden');

    // Set the button count to the number of hidden items
    $btn.attr("count", $hlinks.children().length);
  } else {
    // Keep all items in the visible list
    $vlinks.html($hlinks.html());

    // Hide the dropdown button and hidden links
    $btn.addClass('hidden');
    $hlinks.addClass('hidden');

    // Set the button count to 0
    $btn.attr("count", 0);
  }
}

// Initial call to updateNav
updateNav();

// Window listeners
$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});
