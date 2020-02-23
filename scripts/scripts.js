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

const menuBtns = Array.from(document.getElementsByClassName('topNav-menu--mob_ico'));
menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const menuBox = document.querySelector('.topNav-menu--mob_box');
    menuBox.classList.contains('topNav-menu--mob_open') ? menuBox.classList.remove('topNav-menu--mob_open') : menuBox.classList.add('topNav-menu--mob_open');
  })
})

//menu listeners
function scrollToElem (target) {
  console.log(target)
  document.querySelector(`${target}`).scrollIntoView({behavior: "smooth", block: "start"});
}

const dateBox = document.querySelector('.date-box');
const actualDate = new Date().getFullYear();
dateBox.textContent = `© ${actualDate} by SpartanEco`;

