
$(function () {
    'use strict';
    $('.toggle-sidebar').on("click", function() {
        $(".content-area , .sidebar").toggleClass("no-sidebar")
    });
    $(".toggle-submenu").on("click", function() {
        $(this).find(".fa-sharp").toggleClass('down')
        $(this).next(".child-links").slideToggle();
    });
    $('.fa-bell').on("click", function() {
        $(".dropdown-menu").toggleClass("down")
    });
    $('.usermenu').on("click", function() {
        $(".dropdown-menu.user-show").toggleClass("down-user")
    });

    $('.toggle-fullscr').on("click", function() {
        $(this).toggleClass("full-screen");
        if ($(this).hasClass("full-screen")) {
            openFullscreen();
        }
        else {
            closeFullscreen();
        }
    });
    $('.toggle-setting').on("click", function() {
      $(".setting-box").toggleClass("show-setting")
  });

  var themesClasses = [];
$('.color-options li').each(function(){
  themesClasses.push($(this).data("theme"))
});
$(".color-options li").on("click", function(){
  $(this).addClass('active').siblings().removeClass('active')
  $("body")
  .removeClass(themesClasses.join(" "))
  .addClass($(this).data("theme"));
});

  var fontsClasses = [];
  $(".font-options select option").each(function() {
    fontsClasses.push($(this).val());
    console.log(fontsClasses)
  });

$(".font-options select").on("change", function () {
  $("body")
  .removeClass(fontsClasses.join(" "))
  .addClass($(this).find('option:selected').val());
});

});


var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}