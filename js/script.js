var slider_price=0, slider_complect=0, slider_myth=0;

$(document).ready(function(){ 
	
	$('form input[type="text"], form textarea').blur(function(){
		if( $(this).val()!='' ){ $(this).next().addClass('hidden'); }
		else{ $(this).next().removeClass('hidden'); }
	})
	
	$('.buttons .ask, .buttons .call').magnificPopup({
		type:'inline',
		midClick: true 
	});
	
	$('.mobile-menu').on('click touch',function(){
		$('.menu-container ul').slideToggle();
		return false;
	})
	
	$('.menu-container ul li a').on('click', function(){
		$('.menu-container ul').slideToggle();
		$.scrollTo( '.'+$(this).data('url') ,1500, { offset:-120, easing:'easeOutCubic' } );
		return false;
	})
	
	$('.feedback ul').bxSlider({
		infiniteLoop: !false,
		controls: !true,
		pager: true,
		minSlides:1,
		maxSlides:1
	});
	
	$('.hiw-cover ul').bxSlider({
		infiniteLoop: !false,
		controls: !true,
		pager: true,
		minSlides:1,
		maxSlides:1
	});
	
	_resize();
	$(window).resize(function(){ _resize(); })
  
})

function _resize(){
	if( $(window).width()<768 ){ 
		var str=$('.sputnik-2 p').html();
		$('.sputnik-2 p').html( str.replace(/&nbsp;/g, ' ') );		
	}
	
	if( slider_price!=0 ){
		slider_price.destroySlider();
		slider_complect.destroySlider();
		slider_myth.destroySlider();
		
	}
	
	if( $(window).width()<768 ){ 
		
	}
	
	if( $(window).width()>=415 && $(window).width()<768 ){ 
		slider_price=$('.price ul').bxSlider({
			infiniteLoop: !false,
			controls: !true,
			pager: true,
			minSlides:2,
			maxSlides:2,
			slideWidth:410
		});
		
		slider_complect=$('.complect ul').bxSlider({
			infiniteLoop: !false,
			controls: !true,
			pager: true,
			minSlides:2,
			maxSlides:2,
			slideWidth:410
		});
		
		slider_myth=$('.myth ul').bxSlider({
			infiniteLoop: !false,
			controls: !true,
			pager: true,
			minSlides:2,
			maxSlides:2,
			slideWidth:410
		});
	}
	
	if( $(window).width()<=414 ){ //alert('dfd')
		slider_price=$('.price ul').bxSlider({
			infiniteLoop: !false,
			controls: !true,
			pager: true,
			minSlides:1,
			maxSlides:1,			
			slideWidth:310
		});
		
		slider_complect=$('.complect ul').bxSlider({
			infiniteLoop: !false,
			controls: !true,
			pager: true,
			minSlides:1,
			maxSlides:1,			
			slideWidth:310
		});
		
		slider_myth=$('.myth ul').bxSlider({
			infiniteLoop: !false,
			controls: !true,
			pager: true,
			minSlides:1,
			maxSlides:1,			
			slideWidth:310
		});
	}
}
