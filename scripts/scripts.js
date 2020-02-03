let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  scroll_pos < 5 ?
    document.querySelector('nav').classList.remove('transparent') :
    document.querySelector('nav').classList.add('transparent')
}

window.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});