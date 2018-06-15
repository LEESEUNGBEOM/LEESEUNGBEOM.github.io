$(document).ready(function () {
	//메인뉴스 
	if ($(".main_news").length > 0) {
		var e = $(".main_news");
		var d = e.find(".conbar");
		var f = $(".bxslider").bxSlider({
			mode: "fade",
			easing: "ease-out",
			auto: true,
			speed: 500,
			pause: 5000,
			controls: false,
			autoHover: true,
			moveSlides: 2,
			touchEnabled: true,
			onSlideBefore: function (b, c, a) {
				$("#main").removeClass("bg1 bg2 bg3 bg4 bg5");
				$("#main").addClass("bg" + (a + 1) + "");
				$(".bxslider li  a").attr("tabindex", "-1");
				$(".bxslider li.active-slide  a").attr("tabindex", "0");
			},
			onSlideAfter: function (b, c, a) {
				$(".active-slide").removeClass("active-slide");
				$(".bxslider li").eq(a + 1).addClass("active-slide");	
			},
			onSliderLoad: function () {
				$(".bxslider li").eq(1).addClass("active-slide");
			}
		});
         e.find("#mov1").on("play", function () {
            e.find(".btn_stop").hide().next().show().focus();
            f.stopAuto() 
        });
        e.find("#mov1").on("pause", function () {
            f.startAuto();
			e.find(".btn_play").hide().prev().show().focus()
        });
        e.find(".mov video").on("focusin", function () {
			f.stopAuto()
		});
        e.find("a").on("focusin", function () {
			f.stopAuto()
		});
		e.find("a").on("focusout", function () {
			if ($(".main_news .btn_play").is(":hidden")) {
				f.startAuto()
			} else {
				f.stopAuto()
			}
		});
		e.on("mouseover focusin", function () {
			if ($(".main_news .btn_play").is(":hidden")) {
				e.on("mouseover focusin", function () {
					f.stopAuto()
				});
				e.on("mouseout focusout", function () {
					f.startAuto()
				})
			} else {
				f.stopAuto();
				e.on("mouseout focusout", function () {
					f.stopAuto()
				})
			}
		});
		e.find(".bx-controls").prependTo(d);
		e.find(".btn_prev").click(function (a) {
			a.preventDefault();
			f.goToPrevSlide()
		});
		e.find(".btn_next").click(function (a) {
			a.preventDefault();
			f.goToNextSlide()
		});
		e.find(".btn_stop").click(function (a) {
			a.preventDefault();
			f.stopAuto();
			$(this).hide().next().show().focus()
		});
		e.find(".btn_play").click(function (a) {
			a.preventDefault();
			f.startAuto();
			$(this).hide().prev().show().focus()
		});
		$(".topbtn a, h1 a").click(function (a) {
			//a.preventDefault();
			f.goToSlide(0);
		});
	}
	
	
	if ($(".main_news_").length > 0) {
		var g = $(".main_news_");
		var h = g.find(".conbar_");
		var i = $(".bxslider_").bxSlider({
			mode: "fade",
			easing: "ease-out",
			auto: true,
			speed: 500,
			pause: 5000,
			controls: false,
			autoHover: true,
			moveSlides: 5,
			touchEnabled: true,
			onSlideBefore: function (j, k, l) {
				$("#section2").removeClass("bg1 bg2 bg3 bg4 bg5");
				$("#section2").addClass("bg" + (l + 1) + "");
				$(".bxslider_ li  l").attr("tabindex", "-1");
				$(".bxslider_ li.active-slide  l").attr("tabindex", "0");
			},
			onSlideAfter: function (j, k, l) {
				$(".active-slide_").removeClass("active-slide");
				$(".bxslider_ li").eq(l + 1).addClass("active-slide");	
			},
			onSliderLoad: function () {
				$(".bxslider_ li").eq(1).addClass("active-slide");
			}
		});
         g.find("#mov1").on("play", function () {
            g.find(".btn_stop_").hide().next().show().focus();
            i.stopAuto() 
        });
        g.find("#mov1").on("pause", function () {
            i.startAuto();
			g.find(".btn_play_").hide().prev().show().focus()
        });
        g.find(".mov video_").on("focusin", function () {
			i.stopAuto()
		});
        g.find("l").on("focusin", function () {
			i.stopAuto()
		});
		g.find("l").on("focusout", function () {
			if ($(".main_news_ .btn_play_").is(":hidden")) {
				i.startAuto()
			} else {
				i.stopAuto()
			}
		});
		g.on("mouseover focusin", function () {
			if ($(".main_news_ .btn_play_").is(":hidden")) {
				g.on("mouseover focusin", function () {
					i.stopAuto()
				});
				g.on("mouseout focusout", function () {
					i.startAuto()
				})
			} else {
				i.stopAuto();
				g.on("mouseout focusout", function () {
					i.stopAuto()
				})
			}
		});
		g.find(".bx-controls_").prependTo(d);
		g.find(".btn_prev_").click(function (l) {
			l.preventDefault();
			i.goToPrevSlide()
		});
		g.find(".btn_next_").click(function (l) {
			l.preventDefault();
			i.goToNextSlide()
		});
		g.find(".btn_stop_").click(function (l) {
			l.preventDefault();
			i.stopAuto();
			$(this).hide().next().show().focus()
		});
		g.find(".btn_play_").click(function (l) {
			l.preventDefault();
			i.startAuto();
			$(this).hide().prev().show().focus()
		});
		$(".topbtn_ l, h1 l").click(function (l) {
			//l.preventDefault();
			i.goToSlide(0);
		});
	}
	//웹툰
	
	//카드뉴스
	if ($("#section2 .card_news_slider_wrap").length > 0) {
		var c_len = $("#section2 .card_news_slider_wrap > ul > li").length;
		for (var j = 0; j < c_len; j++) {
			$('#section2 .card_pagenate > span').append($('<a data-slide-index="' + j + '" href="">' + (j + 1) + '</a>'));
		}
		var c_wrap = $("#section2 .card_news_slider_wrap");
		var c_slider = $("#section2 .card_news_slider_wrap > ul").bxSlider({
			pause: 5000,
			controls: false,
			autoHover: true,
			pager: true,
			pagerType: 'full',
			pagerCustom: '.card_pagenate span',
			moveSlides: 1,
			touchEnabled: true,
			onSlideAfter: function (e, d, f) {
				$(".active-slide").removeClass("active-slide");
				$("#section2 .card_news_slider_wrap > ul li").eq(f + 1).addClass("active-slide");
				$("#section2 .card_news_slider_wrap > ul li a").attr("tabindex", "-1");
				$("#section2 .card_news_slider_wrap > ul li.active-slide a").attr("tabindex", "0");
			},
			onSliderLoad: function () {
				$("#section2 .card_news_slider_wrap > ul li").eq(1).addClass("active-slide");
			}
		});
		c_wrap.find(".btn_prev").click(function (e) {
			e.preventDefault();
			c_slider.goToPrevSlide();
		});
		c_wrap.find(".btn_next").click(function (e) {
			e.preventDefault();
			c_slider.goToNextSlide();
		});
	}
	
	////카드뉴스 팝업
	function opencard( num ) {
	    
	    // num 값 활용은 아직
	    
	    if($('.on .card_pagenate > span > a').length > 0) return; // 생성은 1번만	 
	    
	    var cn_len = $(".on .card_news_slider_wrap > ul > li").length;
		for (var ci = 0; ci < cn_len; ci++) {
			$('.on .card_pagenate > span').append($('<a data-slide-index="' + ci + '" href="">' + (ci + 1) + '</a>'));
		}
		var cn_wrap = $(".on .card_news_slider_wrap");
		
		interact($('.on')).on('doubletap',function(event){event.currentTarget.classList.toggle('large');event.currentTarget.classList.remove('rotate');event.preventDefault();});
		
		var cn_slider = $(".on .card_news_slider_wrap > ul").bxSlider({
			pause: 5000,
			controls: false,
			autoHover: true,
			pager: true,
			pagerType: 'full',
			pagerCustom: '.card_pagenate span',
			moveSlides: 1,
			touchEnabled: true,
			onSlideAfter: function (e, d, f) {
				$(".active-slide").removeClass("active-slide");
				$(".on .card_news_slider_wrap > ul li").eq(f + 1).addClass("active-slide");
				$(".on .card_news_slider_wrap > ul li a").attr("tabindex", "-1");
				$(".on .card_news_slider_wrap > ul li.active-slide a").attr("tabindex", "0");
			},
			onSliderLoad: function () {
			    $(".on .card_news_slider_wrap > ul li").eq(1).addClass("active-slide");				
        		cn_wrap.find(".btn_prev").click(function (e) {
        			e.preventDefault();
        			cn_slider.goToPrevSlide();
        		});
        		cn_wrap.find(".btn_next").click(function (e) {
        			e.preventDefault();
        			cn_slider.goToNextSlide();
        		});
				
			}
			
		});

	}

	//동영상 높이
	function openmov() {
		var mw = $(".black .mov").css("width").replace(/[^-\d\.]/g, "");
		var mh = Number(mw) * 0.5625;
		if ($(document).width() < 1200) {
			$(".black .mov").find("iframe").css({
				width: mw + "px",
				height: mh + "px"
			});
			$(".black .mov").find("video").css({
				width: mw + "px",
				height: mh + "px"
			});
			$(".black .mov_popup").css({
				"margin-top": -(mh * 0.5) + "px",
				"margin-left": -(mw * 0.5) + "px",
			});
		}
	}
	//모달팝업
	$("a.mov_pop1").bind({
		click: function (c) {
			c.preventDefault();
			$(".black.mov_pop1").toggleClass("on");
			$("body").addClass("popup_open");
		}
	});
	$("a.mov_pop2").bind({
		click: function (c) {
			c.preventDefault();
			$(".black.mov_pop2").toggleClass("on");
			$("body").addClass("popup_open");
		}
	});
	$("a.mov_pop3").bind({
		click: function (c) {
			c.preventDefault();
			$(".black.mov_pop3").toggleClass("on");
			$("body").addClass("popup_open");
		}
	});
	$("a.mov_pop4").bind({
		click: function (c) {
			c.preventDefault();
			$(".black.mov_pop4").toggleClass("on");
			$("body").addClass("popup_open");
		}
	});
	$("a.info_pop1").bind({
		click: function (c) {
			c.preventDefault();
			$(".black.info_pop1").toggleClass("on");
			$("body").addClass("popup_open");
		}
	});
    $("a.wt_pop1").bind({
		click: function (c) {
			c.preventDefault();
			$(".black.wt_pop1").toggleClass("on");
			$("body").addClass("popup_open");
		}
	});
	$("a.card_pop1").bind({
		click: function (c) {
			c.preventDefault();
			$(".black.card_pop1").toggleClass("on");
			$("body").addClass("popup_open");
			opencard();
		}
	});
	$("a.card_pop2").bind({
		click: function (c) {
			c.preventDefault();
			$(".black.card_pop2").toggleClass("on");
			$("body").addClass("popup_open");
			opencard();
		}
	});
	
	//팝업창 닫기
	$(".close_pop, .close_btn").bind({
		click: function (c) {
			c.preventDefault();
			$(".black").removeClass("on");
			$("body").removeClass("popup_open");
			
		}
	});
	
	//클릭시 스크롤이동
	$(".go_btn").bind({
		click: function (c) {
			c.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);	
		}
	});
	//관련사이트 열기
	$("a.linkopen").bind({
		click: function (c) {
			c.preventDefault();
			$(".linksite").toggleClass("on");
			$(".linkopen").parent("li").toggleClass("on");
		}
	});
    //업무계획 열고닫기
	$(".no_list > li > a").bind({
		click: function (c) {
			c.preventDefault();
			$(".no_list > li").toggleClass("on");
		}
	});
	
	//메뉴열기
	$("a.menuicon").bind({
		click: function (c) {
			c.preventDefault();
			$(".nav_wrap").addClass("on");
			$(".black.back").addClass("on");
			$("body").addClass("popup_open");
		}
	});
	//메뉴닫기
	$("a.close").bind({
		click: function (c) {
			c.preventDefault();
			$(".nav_wrap").removeClass("on");
			$(".black.back").removeClass("on");
			$("body").removeClass("popup_open");
		}
	});
	//메뉴 클릭시 닫기
	$("nav a").bind({
		click: function (c) {
			$(".nav_wrap").removeClass("on");
			$(".black.back").removeClass("on");
			$("body").removeClass("popup_open");
		}
	});

});