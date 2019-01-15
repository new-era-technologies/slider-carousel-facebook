'use strict';

$(function() {

		$('body').append('<div id="MarketGidComposite120193"></div>');
		$('#MarketGidComposite120193').append('<div class="mgbox"></div>');
		$('.mgbox').append('<div class="mgheader"></div>');
		$('.mgheader').append('<span class="mghead">Promoted Content</span>');
		$('.mgheader').append('<div class="mg_addad120193"></div>');
		$('.mg_addad120193').append('<a href="https://www.mgid.com/advertisers?utm_source=widget&utm_medium=text&utm_campaign=add&utm_content=120193" target="_blank" rel="nofollow">by</a>');
		$('.mg_addad120193 > a').append('<img src="img/mgid_logo_mini_43x20.png" alt="Mgid" title="Mgid">');
		$('.mgbox').append('<div class="slider-box"></div>');
		$('.slider-box').append('<ul class="slider"></ul>');
		$('.slider').append('<li class="mgline active"></li>');
		$('.slider').append('<li class="mgline not-active next"></li>');
		$('.slider').append('<li class="mgline not-active next"></li>');
		$('.slider').append('<li class="mgline not-active next"></li>');
		$('.slider').append('<li class="mgline not-active next"></li>');
		$('.slider').append('<li class="mgline not-active next"></li>');
		$('.slider').append('<li class="mgline not-active next"></li>');
		$('.slider').append('<li class="mgline not-active next"></li>');
		$('.slider').append('<li class="mgline not-active next"></li>');
		$('.mgline').append('<div class="image-with-text"></div>');
		$('.image-with-text').append('<div class="mcimg"><a href="http://google.com" target="_blank" rel="nofollow"><div class="image-container"><img class="mcimg" src="img/2225003_quadratic.jpg"></div></a></div>');
		$('.image-with-text').append('<div class="text-elements"></div>');
		$('.text-elements').append('<div class="text-on-hover"></div>');
		$('.text-on-hover').append('<div class="mctitle"><a href="http://google.com" target="_blank" rel="nofollow">discover animals without hear or feathers dadj dsjfj adif dsj ifjids jfids</a></div>');
		$('.text-on-hover').append('<div class="fake"><div class="mcdomain"><a href="#" target="_blank" rel="nofollow"></a></div></div>');
		$('.text-on-hover').append('<div class="mgtobottom"><div class="mcdomain"><a href="#" target="_blank" rel="nofollow">herbeauty.co</a></div></div>');
		$('.slider-box').append('<div class="slider-prev"><img src="img/scroll-arrow-to-left.svg" alt=""></div>');
		$('.slider-box').append('<div class="slider-next"><img src="img/scroll-arrow-to-right.svg" alt=""></div>');

		var conteiner = $('.mgbox');
			conteiner.css('width', '349.5px');
			conteiner.css('height', '321px');
			conteiner.css('min-width', '90px');
			conteiner.css('max-width', '2000px');
			conteiner.css('line-height', '100%');
			conteiner.css('margin', '0 auto');
			conteiner.css('position', 'relative');
			conteiner.css('overflow', 'hidden');
			conteiner.css('vertical-align', 'top');
			conteiner.css('text-align', 'center');
			conteiner.css('padding', '0');
			conteiner.css('border', '1px solid #bfbfbf');

		var mgheader = $('.mgheader');
			mgheader.css('width','100%');

		var mghead = $('.mghead');
			mghead.css('color', '#2f3b82');
			mghead.css('font-weight', '700');
			mghead.css('font-size', '14px');
			mghead.css('text-transform', 'uppercase');
			mghead.css('text-align', 'left');
			mghead.css('font-family', '"Open sans", sans-serif');
			mghead.css('display', 'block');
			mghead.css('margin', '8px 0 0 15px');
			mghead.css('float', 'left');

		var mgaddad = $('.mg_addad120193');
			mgaddad.css('text-align','right');
			mgaddad.css('opacity','0.5');
			mgaddad.css('margin-right','15px');
			mgaddad.css('display','inline-block');
			mgaddad.css('float','right');
			mgaddad.css('margin-top', '6px');

			mgaddad.hover(function() {
							mgaddad.css('opacity', '1');
						}, function() {
							mgaddad.css('opacity', '0.5')
					})

		var mgaddadLink = $('.mg_addad120193 > a');
			mgaddadLink.css('color','#000000');
			mgaddadLink.css('font','normal 10px Myriad Pro');
			mgaddadLink.css('text-decoration','none');

		var mgaddadImg = $('.mg_addad120193 > a > img');
			mgaddadImg.css('display', 'inline-block');
			mgaddadImg.css('width', 'auto');
			mgaddadImg.css('border', 'none');
			mgaddadImg.css('margin', '0 -5px 0 0');

		var inner = $('.slider');
			inner.css('width', '2100px');
			inner.css('height', '450px');
			inner.css('position', 'absolute');
			inner.css('left', '0');
			inner.css('top', '10px');
			inner.css('list-style', 'none');
			inner.css('padding-left', '0');

		var slide = $('.mgline');
			slide.css('float', 'left');
			slide.css('display', 'block');
			slide.css('border', '1px solid #bfbfbf');
			slide.css('margin', '10px 5px');
			slide.css('min-width', '90px');
			slide.css('width', '10.51111111%');
			slide.css('max-width', '10.51111111%');
			slide.css('vertical-align', 'top');
			slide.css('padding', '0');


		var imageWithText = $('.image-with-text');
			imageWithText.css('display','block');
			imageWithText.css('width','100%');
			imageWithText.css('max-width','328px');
			imageWithText.css('min-height','1px');
			imageWithText.css('margin','0 auto');

		var imageContainer = $('.image-container');
			imageContainer.css('width','auto');
			imageContainer.css('margin','0 auto');

		var image = $('.mcimg');
			image.css('width', '100%');
			image.css('height', 'auto');
			image.css('display', 'block');
			image.css('max-width', '328px');
			image.css('max-height', '328px');

		var textElements = $('.text-elements');
			textElements.css('display', 'block');

		var mcTitle = $('.mctitle');
			mcTitle.css('margin-top','2px');
			mcTitle.css('margin-left','10px');
			mcTitle.css('margin-right','15px');
			mcTitle.css('display','block');
			mcTitle.css('height','34px');
			mcTitle.css('overflow','hidden');
			mcTitle.css('text-align','left');

		var mcTitleLink = $('.mctitle > a');
			mcTitleLink.css('line-height','110%');
			mcTitleLink.css('text-decoration','none');
			mcTitleLink.css('color','#4f81bd');
			mcTitleLink.css('font-family','"Open sans", sans-serif');
			mcTitleLink.css('font-style','normal');
			mcTitleLink.css('font-size','13px');
			mcTitleLink.css('font-weight','bold');

		var fake = $('.fake');
			fake.css('display','block');
			fake.css('visibility','hidden');

		var mcDomain = $('.mcdomain');
			mcDomain.css('display','block');
			mcDomain.css('overflow','hidden');
			mcDomain.css('padding','0 4px 4px 4px');
			mcDomain.css('text-align','left');

		var mcDomainLink = $('.mcdomain > a');
			mcDomainLink.css('padding-left','6px');
			mcDomainLink.css('padding-right','0');
			mcDomainLink.css('display','block');
			mcDomainLink.css('padding-bottom','2px');
			mcDomainLink.css('overflow','hidden');
			mcDomainLink.css('font-family','"Open sans", sans-serif');
			mcDomainLink.css('color','#bbbbbb');
			mcDomainLink.css('text-decoration','none');
			mcDomainLink.css('font-style','normal');
			mcDomainLink.css('line-height','10px');
			mcDomainLink.css('font-size','10px');
			mcDomainLink.css('font-weight','normal');

		var mgTobottom = $('.mgtobottom');
			mgTobottom.css('display','block');
			mgTobottom.css('width','100%');
			mgTobottom.css('max-width','328px');
			mgTobottom.css('margin','0 auto');
			mgTobottom.css('text-align','left');


		var sliderPrev = $('.slider-prev');
			sliderPrev.css('cursor', 'pointer');
			sliderPrev.css('position', 'absolute');
			sliderPrev.css('top', '45%');
			sliderPrev.css('width', '40px');
			sliderPrev.css('height', '40px');
			sliderPrev.css('background-color', '#fff');
			sliderPrev.css('border-right', '1px solid #bfbfbf');
			sliderPrev.css('border-top', '1px solid #bfbfbf');
			sliderPrev.css('border-bottom', '1px solid #bfbfbf');

		var sliderPrevLink = $('.slider-prev > img');
			sliderPrevLink.css('width', '20px');
			sliderPrevLink.css('height', '40px');

		var sliderNext = $('.slider-next');
			sliderNext.css('cursor', 'pointer');
			sliderNext.css('position', 'absolute');
			sliderNext.css('top', '45%');
			sliderNext.css('width', '40px');
			sliderNext.css('height', '40px');
			sliderNext.css('background-color', '#fff');
			sliderNext.css('right', '0');
			sliderNext.css('border-left', '1px solid #bfbfbf');
			sliderNext.css('border-top', '1px solid #bfbfbf');
			sliderNext.css('border-bottom', '1px solid #bfbfbf');

		var sliderNextLink = $('.slider-next > img');
			sliderNextLink.css('width', '20px');
			sliderNextLink.css('height', '40px');

				sliderPrev.hover(function() {
								sliderPrev.css('opacity', 0.8);
							}, function() {
								sliderPrev.css('opacity', 1);
							})


				sliderNext.hover(function() {
								sliderNext.css('opacity', 0.8);
							}, function() {
								sliderNext.css('opacity', 1);
							})

	var	first = $('.slider > :first-child'),
		second = $('.slider > :eq(-3)'),
		last = $('.slider > :lt(-1)'),
		beforeLast = $('.slider > :lt(-2)'),
		currentImageIndex = 0,
		width = 300;

	function SwitchImgNext() {

		if (currentImageIndex === first.length) {
			inner.animate({
				left: "-=174"
			}, 200);
		} else if (currentImageIndex === last.length) {
			inner.animate({
				left: "-=174"
			}, 200);
		} else {
			inner.animate({
				left: "-=233"
			}, 200);
		}

		var slide = $('.mgline'),
			activeSlide = slide.filter('.active'),
			nextSlide = activeSlide.next();

		if (nextSlide.length) {
			activeSlide.removeClass('active').addClass('not-active').addClass('prev');
			nextSlide.removeClass('not-active').addClass('active').removeClass('next');
		}

	};

	function SwitchImgPrev() {

		if (currentImageIndex === beforeLast.length) {
			inner.animate({
				left: "+=174"
			}, 200);
		} else if (currentImageIndex === 0) {
			inner.animate({
				left: "+=174"
			}, 200);
		} else {
			inner.animate({
				left: "+=233"
			}, 200);
		}

		var slide = $('.mgline'),
			activeSlide = slide.filter('.active'),
			prevSlide = activeSlide.prev();

		if (prevSlide.length) {
			activeSlide.removeClass('active').addClass('not-active').addClass('next');
			prevSlide.removeClass('not-active').addClass('active').removeClass('prev');
		}
	};


	$('.slider-prev').hide();

	$('.slider-prev').click(function() {

		currentImageIndex--;
		SwitchImgPrev();

		if (currentImageIndex == 0) {
			$('.slider-prev').fadeOut(100);
			$('.mgline.active').animate({opacity: 1},500);
			$('.mgline.not-active').animate({opacity: 0.6},500);
		} else {
			$('.slider-prev, .slider-next').fadeIn();
			$('.mgline.active').animate({opacity: 1},500);
			$('.mgline.not-active').animate({opacity: 0.6},500);
		}

	});

	$('.slider-next').click(function() {

		currentImageIndex++;
		SwitchImgNext();

		if (currentImageIndex >= $('.mgline').length - 1) {
			$('.slider-next').fadeOut(100);
			$('.slider > :last-child').off('click');
			$('.mgline.active').animate({opacity: 1},500);
			$('.mgline.not-active').animate({opacity: 0.6},500);
		} else {
			$('.slider-prev, .slider-next').fadeIn();
			$('.mgline.active').off('click');
			$('.mgline.active').animate({opacity: 1},500);
			$('.mgline.not-active').animate({opacity: 0.6},500);
		}

	});


	$('.slider-box').hover(function() {
								$('.mgline.active').animate({opacity: 1},500);
								$('.mgline.not-active').animate({opacity: 0.6},500);
							}, function() {
								$('.mgline').animate({opacity: 1},500);
							})


	$('.slider').delegate('.next', 'click', function(e) {
			e.preventDefault();

		currentImageIndex++;
		SwitchImgNext();

		if (currentImageIndex >= $('.mgline').length - 1) {
			$('.slider-next').fadeOut(100);
			$('.slider > :last-child').off('click');
			$('.mgline.active').animate({opacity: 1},500);
			$('.mgline.not-active').animate({opacity: 0.6},500);
		} else {
			$('.slider-prev, .slider-next').fadeIn();
			$('.mgline.active').off('click');
			$('.mgline.active').animate({opacity: 1},500);
			$('.mgline.not-active').animate({opacity: 0.6},500);
		}

	});


	$('.slider').delegate('.prev', 'click', function(e) {
			e.preventDefault();

		currentImageIndex--;
		SwitchImgPrev();

		if (currentImageIndex == 0) {
			$('.slider-prev').fadeOut(100);
			$('.mgline.active').animate({opacity: 1},500);
			$('.mgline.not-active').animate({opacity: 0.6},500);
		} else {
			$('.slider-prev, .slider-next').fadeIn();
			$('.mgline.active').animate({opacity: 1},500);
			$('.mgline.not-active').animate({opacity: 0.6},500);
		}

	});

	$('.slider').delegate('.next', 'swipe', function(e) {
			e.preventDefault();

		currentImageIndex++;
		SwitchImgNext();

		if (currentImageIndex >= $('.mgline').length - 1) {
			$('.slider-next').fadeOut(100);
			$('.slider > :last-child').off('click');
			$('.mgline.active').animate({opacity: 1},500);
			$('.mgline.not-active').animate({opacity: 0.6},500);
		} else {
			$('.slider-prev, .slider-next').fadeIn();
			$('.mgline.active').off('click');
			$('.mgline.active').animate({opacity: 1},500);
			$('.mgline.not-active').animate({opacity: 0.6},500);
		}

	});

	$('.slider').delegate('.prev', 'swipe', function(e) {
			e.preventDefault();

		currentImageIndex--;
		SwitchImgPrev();

		if (currentImageIndex == 0) {
			$('.slider-prev').fadeOut(100);
			$('.mgline.active').animate({opacity: 1},500);
			$('.mgline.not-active').animate({opacity: 0.6},500);
		} else {
			$('.slider-prev, .slider-next').fadeIn();
			$('.mgline.active').animate({opacity: 1},500);
			$('.mgline.not-active').animate({opacity: 0.6},500);
		}

	});

});