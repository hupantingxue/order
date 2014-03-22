$(function(){
	$('#menu li').click(function(){
		$('#menu li').removeClass();
		$(this).addClass('active');
	})
	
	$('.login_form_input').click(function(){
		$('#menu li').removeClass();
		$(this).addClass('active');
	})

	$('#about').click(function(){
		window.location.href='../about';
	})
	$('#contact').click(function(){
		window.location.href='../contact';
	})
	$('#home').click(function(){
		window.location.href='/';
	})
})

