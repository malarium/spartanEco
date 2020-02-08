let last_known_scroll_position = 0;
let ticking = false;

function topNavAnimateColor(scroll_pos) {
  scroll_pos < 5 ?
    document.querySelector('nav').classList.remove('toWhite') :
    document.querySelector('nav').classList.add('toWhite')
}

window.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      topNavAnimateColor(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
// window.addEventListener('DOMContentLoaded', () => {
//   const txtHeight = document.querySelector('.aboutUs-txt').offsetHeight;
//   const imgsBlock = document.querySelector('.aboutUs-imgs');
//   imgsBlock.style.height = `${txtHeight}px;`;
// })