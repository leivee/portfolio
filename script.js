function start(){
  $(`body`).css(`background-color`, `#DCDCDC`);
}
$(window).on(`load`, start);

function loadpage(e) {
  e.preventDefault(); // helps it to stay wherever it's suppposed to stay
  $(`#menu a`).removeClass(`active`);
  $(this).addClass(`active`);

  var href = $(this).attr(`href`)
  $(`#content`).load(href);
}

$(document).on(`click`, `#menu a`, loadpage);
