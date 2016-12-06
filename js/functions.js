var pContainerHeight = $('.tom-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /10 +'%)'
    });

    $('.fore-tom').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }
});
