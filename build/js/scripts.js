$(function () {

  $(".mask-phone").mask("+7 (999) 999-99-99");
  $(".mask-code").mask("999-999-999-999");

  $(".mobile-group__title").click(function () {
    if ($('.mobile-group__title').is(':visible')) {
      $(".mobile-group__links").slideUp(300);
      $(".mobile-group").removeClass('active');
      $(".mobile-group__links").css('opacity', '0');
    }
    if ($(this).next(".mobile-group__links").is(':visible')) {
      $(this).next(".mobile-group__links").slideUp(300);
      $(this).parent().removeClass('active');
    
    } else {
      $(this).next(".mobile-group__links").slideDown(300);
      $(this).next(".mobile-group__links").css('opacity', '1');
      $(this).parent().addClass('active');
    }
  });

  $('.hamburger').click(function () {
    if ($('.hamburger').hasClass('collapsed')) {
      $(this).removeClass('collapsed');
      $('.mobile-header-menu').addClass('show');
    }
    else {
      $(this).addClass('collapsed');
      $('.mobile-header-menu').removeClass('show');
    }
  });
  $('.navigation-list--link').click(function () {
    $(this).parent().parent().parent().removeClass('show');
    $('.hamburger').addClass('collapsed');
  });
  $('.banner-form-control').focus(function () {
    $(this).parent().addClass('focus');
  }).blur(function () {
    $(this).parent().removeClass('focus');
  });

  $(".js-change-modal").on("click", function (e) {
    e.preventDefault();
    $(".modal").modal("hide");
    var id = $(this).attr("href");
    setTimeout(() => {
      $(id).modal("show");
    }, 1000);
  });

  // scroll to id
  $(".js-scroll-to").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href").replace("#", "");
    $("html, body").animate(
      {
        scrollTop: $("#" + id).offset()
      },
      0
    );
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
})

var forms = document.querySelectorAll('.needs-validation')
Array.prototype.slice.call(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })



if ($(window).width() < 764) {
  $('.marquee').marquee({
    duration: 12000,
    allowCss3Support: true,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true,
    startVisible: true,
  });
} else {
  $('.marquee').marquee({
    duration: 32000,
    allowCss3Support: true,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true,
    startVisible: true,
  });
}

const swiper = new Swiper('.swiper-documents', {
  direction: 'horizontal',
  observer: true,
  observeParents: true,
  breakpoints: {
    1200: {
      slidesPerView: 1,
      spaceBetween: 0
    }

  },
  navigation: {
    nextEl: '.swiper-products-next',
    prevEl: '.swiper-products-prev',
  },
  pagination: {                  
    el: '.swiper-pagination',
},

});


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('.select-nav').on('change', function (e) {
  var optionSelected = $(this).find(':selected').data('target')
  $('a[href="' + optionSelected + '"]').tab('show');
});

$('.mobile-link').click(function () {
  if ($('.mobile-link').hasClass('collapsed')) {
    // $(this).removeClass('collapsed');
    $('.sss').addClass('showsss');
  }
  else {
    $(this).addClass('collapsed');
    $('.page-header-menu').removeClass('show');
  }
});