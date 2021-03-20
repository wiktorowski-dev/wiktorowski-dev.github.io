console.log(1)
$(document).ready(function() {
  // MODAL
  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(data_projects[id].title);
    $('#modal .detail').text(data_projects[id].detail);
    $('#modal .tag').text(data_projects[id].tag);
    if (data_projects[id].link)
      $('#modal .button')
          .addClass('visible')
          .parent()
          .attr('href', data_projects[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(data_projects[id].bullets[index]);
    });

    // Add images

    var screen_width = $(window).width()
    if (!
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      screen_width = 700;
    }
    var carousel = $('#carousel');
    carousel.empty()
    for (let i=0; i<data_projects[id].img.length; i++) {
      console.log(data_projects[id].img.length)
      var img_url = data_projects[id].img[i]
      carousel.append(
          '<div class="slide" style="width: ' + screen_width + 'px;"></div>'
      )
      carousel[0].children[i].setAttribute( "style", "width: " + screen_width + "px; background: rgba(0, 0, 0, 0) url(" + img_url + ") repeat scroll center center / cover;")
    }
    // $.each($('#modal .slide'), function(index, value) {
    //   $(this).css({
    //     background:
    //       "url(" + modalText[id].img[index] + ") center center/cover",
    //     backgroundSize: 'cover'
    //   });
    // });
  }
});
