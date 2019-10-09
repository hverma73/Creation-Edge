$(function(){
  var container = $('slidecont');
  var contents = $('contents');
  
  //Set inner content holders to window width - element padding
  contents.width($(window).width() * 0.8);
   $(window).resize(function(){
    contents.width($(window).width() * 0.8 );
  });
    
// Click Functions 
//Note: the class is added to container to adjust for CSS animation direction
  $('right').click(function moveRight(){ 
    container.addClass('moveR');
    container.removeClass('moveL');
    
    var active = $('slidecont').find('.active');
    if(active.is(":last-child")){
      active.removeClass('active');
      $('slide.first').addClass('active');  
    } else {
    active.removeClass('active');
    active.next().addClass('active'); 
    }
   });

  $('left').click(function(){ 
    container.addClass('moveL');
    container.removeClass('moveR');
    
    var active = $('slidecont').find(".active");
    if(active.is(":first-child")){
      active.removeClass('active');
      $('slide.last').addClass('active');  
    } else {
      active.removeClass('active');
      active.prev().addClass('active');
    }
   });
});
