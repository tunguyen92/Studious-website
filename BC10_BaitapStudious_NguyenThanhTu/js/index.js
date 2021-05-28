// Create a Clickable Dropdown
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropdown-toggle")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Darkmode
var icon = document.getElementById("moon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon = document.getElementById("moon").style.opacity = "0";
    icon = document.getElementById("sun").style.opacity = "1";
  } else {
    icon = document.getElementById("sun").style.opacity = "0";
    icon = document.getElementById("moon").style.opacity = "1";
  }
};

// Responsive Navbar
const body = document.querySelector("body");
const navbar = document.querySelector(".header");
const menu = document.querySelector(".header-container");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  body.classList.add("disabledScroll");
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("hide");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabledScroll");
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("hide");
};

window.onscroll = () => {
  this.scrollY > 50
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

// Slick carousel

$(document).ready(function () {
  $(".single-item").slick({
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});

// jQuery Number Counter

(function ($) {
  $(window).on("load", function () {
    $(document).scrollzipInit();
    $(document).rollerInit();
  });
  $(window).on("load scroll resize", function () {
    $(".numscroller").scrollzip({
      showFunction: function () {
        numberRoller($(this).attr("data-slno"));
      },
      wholeVisible: false,
    });
  });
  $.fn.scrollzipInit = function () {
    $("body").prepend(
      "<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>"
    );
  };
  $.fn.rollerInit = function () {
    var i = 0;
    $(".numscroller").each(function () {
      i++;
      $(this).attr("data-slno", i);
      $(this).addClass("roller-title-number-" + i);
    });
  };
  $.fn.scrollzip = function (options) {
    var settings = $.extend(
      {
        showFunction: null,
        hideFunction: null,
        showShift: 0,
        wholeVisible: false,
        hideShift: 0,
      },
      options
    );
    return this.each(function (i, obj) {
      $(this).addClass("scrollzip");
      if ($.isFunction(settings.showFunction)) {
        if (
          !$(this).hasClass("isShown") &&
          $(window).outerHeight() +
            $("#scrollzipPoint").offset().top -
            settings.showShift >
            $(this).offset().top +
              (settings.wholeVisible ? $(this).outerHeight() : 0) &&
          $("#scrollzipPoint").offset().top +
            (settings.wholeVisible ? $(this).outerHeight() : 0) <
            $(this).outerHeight() + $(this).offset().top - settings.showShift
        ) {
          $(this).addClass("isShown");
          settings.showFunction.call(this);
        }
      }
      if ($.isFunction(settings.hideFunction)) {
        if (
          $(this).hasClass("isShown") &&
          ($(window).outerHeight() +
            $("#scrollzipPoint").offset().top -
            settings.hideShift <
            $(this).offset().top +
              (settings.wholeVisible ? $(this).outerHeight() : 0) ||
            $("#scrollzipPoint").offset().top +
              (settings.wholeVisible ? $(this).outerHeight() : 0) >
              $(this).outerHeight() + $(this).offset().top - settings.hideShift)
        ) {
          $(this).removeClass("isShown");
          settings.hideFunction.call(this);
        }
      }
      return this;
    });
  };
  function numberRoller(slno) {
    var min = $(".roller-title-number-" + slno).attr("data-min");
    var max = $(".roller-title-number-" + slno).attr("data-max");
    var timediff = $(".roller-title-number-" + slno).attr("data-delay");
    var increment = $(".roller-title-number-" + slno).attr("data-increment");
    var numdiff = max - min;
    var timeout = (timediff * 1000) / numdiff;
    //if(numinc<10){
    //increment=Math.floor((timediff*1000)/10);
    //}//alert(increment);
    numberRoll(slno, min, max, increment, timeout);
  }
  function numberRoll(slno, min, max, increment, timeout) {
    //alert(slno+"="+min+"="+max+"="+increment+"="+timeout);
    if (min <= max) {
      $(".roller-title-number-" + slno).html(min);
      min = parseInt(min) + parseInt(increment);
      setTimeout(function () {
        numberRoll(
          eval(slno),
          eval(min),
          eval(max),
          eval(increment),
          eval(timeout)
        );
      }, timeout);
    } else {
      $(".roller-title-number-" + slno).html(max);
    }
  }
})(jQuery);
// jQuery Number Counter

//Scroll to top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});
