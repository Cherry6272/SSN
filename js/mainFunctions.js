$(function () {
    $('.menu').on('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.ss-menu1').addClass('visible1');
            $('.ss-menu2').addClass('visible2');
            $('.ss-menu3').addClass('visible3');
            $('.ss-menu4').addClass('visible4');
            $('.ss-menu5').addClass('visible5');
        } else {
            $('.ss-menu1').removeClass('visible1');
            $('.ss-menu2').removeClass('visible2');
            $('.ss-menu3').removeClass('visible3');
            $('.ss-menu4').removeClass('visible4');
            $('.ss-menu5').removeClass('visible5');
        }
    })
})

$(function () {
    $('.ss-menu').on('click', function () {
      $('.menu').removeClass('active');
      $('.ss-menu1').removeClass('visible1');
      $('.ss-menu2').removeClass('visible2');
      $('.ss-menu3').removeClass('visible3');
      $('.ss-menu4').removeClass('visible4');
      $('.ss-menu5').removeClass('visible5');
    })
})
$(function () {
    $(window).on('scroll', function () {
        if ($('.menu').hasClass('active')) {
          $('.menu').removeClass('active');
          $('.ss-menu1').removeClass('visible1');
          $('.ss-menu2').removeClass('visible2');
          $('.ss-menu3').removeClass('visible3');
          $('.ss-menu4').removeClass('visible4');
          $('.ss-menu5').removeClass('visible5');
        }
    })
})

$(function () {
  if (!window.location.pathname.match("mentions")) {
    $('.rellax').css('transform', 'translateX(-50%)');
    var rellax = new Rellax('.rellax');
  }
})


window.addEventListener("load", function () {
  if (document.getElementById('insertMail')) {
    let name = "contact" ; 
    let domain = "yourbandname.com" ; 
    let divMail = document.getElementById('insertMail');
    let newAhref = document.createElement('a');
    newAhref.href = "mailto:" + name + '@' + domain;
    newAhref.innerHTML = name + '@' + domain;
    divMail.appendChild(newAhref);
  }
})


$(function () {
    $('video').on('click', function(event) {
      event.preventDefault();
      document.getElementById('tucoVideo').play();
    });
})

// Manage form
$(function () {
    // Name
      $('#nom').on('blur input', function () {
        if ($('#nom').val().length >= 50) {
          $('#helpNom').text('50 characters max').hide().show();
        } else {
          $('#helpNom').slideUp(400);
        }
      })
      // Phone
      $('#telephone').on('blur input', function () {
        let regexTelephone = /^0?[6-9]\d{9}$/;
        let telEntry = $('#telephone').val().replace(/\s+/g, ''); // remove all spaces
    
        if (!regexTelephone.test(telEntry)) {
            $('#helpTel').text('Incorrect phone number').hide().show();
        } else {
            $('#helpTel').slideUp(400);
        } 
    });
    
    // Email
        $('#mail').on('blur input', function () {
          let regexMail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
          let mailEntry = $('input#mail').val();
          if (!mailEntry.match(regexMail)) {
            $('#helpMail').text('Incorrect email address').hide().show();
          } else {
            $('#helpMail').slideUp(400);
          }
        })


       
    // Message
        $('#message').on('blur input', function () {
          if ($('#message').val().length >= 3000) {
              $('#helpMessage').text('Your message must not exceed 3000 characters').hide().slideDown(400);
          } else {
            $('#helpMessage').slideUp(400);
          }
        })
  })


// Contact form
$(function () {
  $('.contactForm').on('submit', function (e) {
      e.preventDefault();

      let nom = $('#nom').val();
      let telephone = $('#telephone').val();
      let mail = $('#mail').val();
      let message = $('#message').val();

      $.post('../datas/sendFormContact.php', {
          nom: nom,
          telephone: telephone,
          mail: mail,
          message: message,
      },
      function(data) {
          $('form').fadeOut(400, function () {
              $('#retourFormulaire').css({
                  "padding": "10px",
                  "margin-top": "160px",
                  "margin-bottom": "160px",
                  "margin-left": "auto",
                  "margin-right": "auto",
                  "color": "white",
                  "font-size": "1rem",
                  "text-align": "center"
              });
              $('#retourFormulaire').html(data);
          });

          // Clear fields
          $('#nom').val('');
          $('#telephone').val('');
          $('#mail').val('');
          $('#message').val('');
      });
  });
});


// Animations on scroll
$(function () {
    $(window).on('scroll', function () {
        let sizePage = $(window).height();
        let trigger = 100;
        // Animation en Y
        let element = document.getElementsByClassName('animatableY');
        for (var unit of element) {
          if (unit.getBoundingClientRect().top + trigger <= sizePage) {
            unit.classList.add('showed');
          }
        }

        // Animation en X
        let elementh2 = document.getElementsByClassName('animatableX');
        for (var unit of elementh2) {
          if (unit.getBoundingClientRect().top + trigger <= sizePage) {
            unit.classList.add('showed');
          }
        }

        // Animation opacity
        let elementOpacity = document.getElementsByClassName('animatableOpacity');
        for (var unit of elementOpacity) {
          if (unit.getBoundingClientRect().top + trigger <= sizePage) {
            unit.classList.add('showed');
          }
        }
    })
})

//Lazyload
$(function () {
  if (!window.location.pathname.match("mentions")) {
    lazyload();
  }
})

// resize reload
$(function () {
  let initialWidth = $(window).innerWidth();
  $(window).on('resize', function () {
    let newWidth = $(window).innerWidth();
    if (initialWidth != newWidth) {
      document.location.reload(true);
    }
  })
})

// Manage scroll up button
$(function () { 
    let ecran = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      $(window).on('scroll', function () {
        let scrollNow = $(window).scrollTop();
        $(window).on('scroll', function functionName() {
          if (scrollNow > 600 && scrollNow > $(window).scrollTop()) {
            if ($('#upArrow').is(":hidden")) {
              $('#upArrow').show();
            }
          } else {
            $('#upArrow').hide();
          }
        })
        $('#upArrow').on('click', function () {
            $(window).scrollTop(0);
        })
      })
})

// Delete scroll tag on scroll down
$(function () {
    $(window).on('scroll', function () {
        let topPage = $(window).scrollTop();
        if (topPage >= 150) {
          $('#scrollDown').hide();
        } else {
          $('#scrollDown').show();
        }
    })
})
// Manage tag scroll down
$(function () {
    $('#scrollDown').on('click', function() {
      window.location.href = "#nextShow";
    });
})

// Locations
$(function () {
    $(".card").on('click', () => {window.location.href = "https://www.instagram.com/"});
})
// Location socials
$(function () {
    $('.facebook').on('click', function(event) {
      event.preventDefault();
      window.location.href = "https://facebook.com/";
    });
    $('.instagram').on('click', function(event) {
      event.preventDefault();
      window.location.href = "https://www.instagram.com/";
    });
})
