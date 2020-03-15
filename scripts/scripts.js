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

const toggleMobMenu = () => {
  const menuBox = document.querySelector('.topNav-menu--mob_box');
    menuBox.classList.contains('topNav-menu--mob_open') ? menuBox.classList.remove('topNav-menu--mob_open') : menuBox.classList.add('topNav-menu--mob_open');
}

const menuBtns = Array.from(document.getElementsByClassName('topNav-menu--mob_ico'));
menuBtns.forEach(btn => {
  btn.addEventListener('click', toggleMobMenu)
})

//menu listeners
function scrollToElem (target) {
  toggleMobMenu();
  document.querySelector(`${target}`).scrollIntoView({behavior: "smooth", block: "start"});
}

const dateBox = document.querySelector('.date-box');
const actualDate = new Date().getFullYear();
dateBox.textContent = `© ${actualDate} by SpartanEco`;

(function($) {
  $('a[href^=mailto]').each(function() {
    var href = $(this).attr('href');
    $(this).click(function() {
      var t;
      var self = $(this);

      $(window).blur(function() {
        clearTimeout(t);
      });

      t = setTimeout(function() {
        document.querySelector('.contact-form--info').style.display="none";
        document.querySelector('.contact-form--btn').style.display="none";
        document.querySelector('.contact-form--alternative').innerHTML = `
        <p>Program pocztowy nie działa?</p>
        <p>Wyślij mail na adres:</p>`
        // <p class='maildata'>krzysztofpprzybylek@gmail.com</p>`
      }, 1000);
    });
  });
})(jQuery);