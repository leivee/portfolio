function start(){
  $(`body`).css(`background-color`, `#DCDCDC`);
}
$(window).on(`load`, start);

function loadpage(e) {
  e.preventDefault(); // helps it to stay wherever it's suppposed to stay
  $("#menu a").removeClass("active");
  $(this).addClass(`active`);
  $(`main #content`).load(`about.html`);
}

$(document).on(`click`, `#menu a`, loadpage);
