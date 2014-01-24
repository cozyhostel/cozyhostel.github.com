$(window).load(function(){ // On load
  $('.intro, .fix, .about, .checkin, .traffic, .map, .contact').css({'height':(($(window).height()))+'px'});
  $(function() {
      Grid.init();
  });
  $('.intro').css('min-height', '400px');
  $('.intro h1').fadeIn(100);
});
$(window).resize(function(){ // On resize
  $('.intro, .fix, .about, .checkin, .traffic, .map, .contact').css({'height':(($(window).height()))+'px'});
});


//anchor smooth scrolling
function filterPath(string) {
  return string.replace(/^\//,'').replace(/(index|default).[a-zA-Z]{3,4}$/,'').replace(/\/$/,'');
}
var locationPath = filterPath(location.pathname);
$('a[href*=#]').each(function() {
  var thisPath = filterPath(this.pathname) || locationPath;
  if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/,'')) {
    var $target = $(this.hash), target = this.hash;
    if (target) {
      $(this).click(function(event) {
        event.preventDefault();
        var targetOffset = $target.offset().top;
        $('html, body').animate({scrollTop: targetOffset}, 500, 'linear', function() {
          location.hash = target;
        });
      });
    }
  }
});


$('.app .app-head ul li').click(function(){
	
	$(this).addClass("active").siblings().removeClass("active");
	$(this).parents(".app").find(".app-body").children().eq($(this).index()).addClass("active").siblings().removeClass("active");
	
})
$('.menu').click(function() {
    $('.sidebar, .menu').toggleClass('sidebar-open');
    $('.sidebar a').click(function() {
        $('.sidebar, .menu').removeClass('sidebar-open');
    });
});

// $(window).scroll(function() {
//     var rotated = "rotate(0" + $(this).scrollTop()/6 + "deg)skew(0" + $(this).scrollTop()/6 + "deg)";
//     $('.intro h1').css({'transform': rotated});
//     if ($(this).scrollTop() > 540) {
//         $('.intro h1').css({'transform': '', 'display': 'none'});
//     }
//     if ($(this).scrollTop() < 539) {
//         $('.intro h1').css({'transform': rotated, 'display': 'table-cell'});
//     } 
// });
backTop();
function backTop(){
	var a = "<div id='elevator'><a href='javascript:;' class='backTop' title='回到顶部'></a><a href='javascript:;' class='code' title='二维码'></a><div class='qr-popup'> <a class='code-link'> <img src='img/weixin_code.png'> </a> <span>加逸拾光为微信好友</span></div></div>";
	var b = $(document).scrollTop();
	$("body").append(a);
	var c = $("#elevator");
	var d = c.find('.backTop');
	var e = c.find('.code');
	var f = c.find('.qr-popup');
	var tv = $('#tv');
	var timer = null;
	d.on("click",function(){
		$("body,html").animate({scrollTop : 0})	
	});
	e.on("click",function(){
		f.fadeIn();
	})
	e.on('mouseleave',function(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			f.fadeOut();
		},100)	
		
	});
	f.on('mouseleave',function(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			f.fadeOut();
		},100)	
		
	});
	e.on('mouseenter',function(){
		clearTimeout(timer);
	});
	f.on('mouseenter',function(){
		clearTimeout(timer);
	})
	if(b>0){
		c.fadeIn(100);
		tv.fadeOut(100);
	}else{
		c.fadeOut(100);
		tv.fadeIn(100);	
	}
	$(window).on("scroll",function(){
		var g = $(document).scrollTop();
		if(g>0){
			c.fadeIn(100);	
			tv.fadeOut(100);
		}else{
			c.fadeOut(100);
			tv.fadeIn(100);	
		}
	})
	
}