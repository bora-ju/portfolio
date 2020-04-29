
$(document).ready(function() {

// 00. 햄버거 연구
	var navTrigger = document.getElementsByClassName('nav-trigger')[0];
	var body = document.getElementsByTagName('body')[0];

	navTrigger.addEventListener('click', toggleNavigation);

	function toggleNavigation(event) {
		event.preventDefault();
		body.classList.toggle('nav-open');
	}


	// 01.마우스 스크롤 시 헤더 탑에 고정, PC 헤더 가로 사이즈 확장
	$(window).scroll(function() {

        var scrollTop = $(this).scrollTop();
        //console.log(scrollTop);

		if ( scrollTop >= 30 ) {
            $(".h_container").addClass("fixed_top");
            $(".mh_container").addClass("m_fixed_top");

		}else {
            $(".h_container").removeClass("fixed_top");
            $(".mh_container").removeClass("m_fixed_top");
        }

    });

	// 02.모바일 일때 헤더 체인지
    $(window).on('load resize',function (){

        var windowWidth = $(window).width();

        if ( windowWidth < 1000 ) {
            $(".h_container").show();
            $(".mh_container").show();

		}else if ( windowWidth >= 1000 ) {
						$(".h_container").show();
            $(".mh_container").show();
            $("nav").removeAttr('style');
        }
    });

    // 03.모바일 일때 햄버거 메뉴 활성화 및 nav 나타내기
    var burger = $('.menu-trigger');
    burger.on('click', function(e){
            $("nav").slideToggle('fast');
            e.preventDefault();
            $(this).toggleClass('active-1');
    })
		//03-1. 레이어
  		document.getElementsByClassName('.btn-warning')[0].addEventListener('click', function() {
			document.getElementsByClassName('.custom-overlay').style.display = 'block';
		});

    // 04.컨텐츠로 내려가기
    $(window).on('scroll', function() {
	  $(".go_contents").on("click", function(evt) {
	    $("html, body").stop().animate({
	      "scrollTop": 1070
	    }, 600, "easeInCubic");
	    evt.preventDefault();
	  });

    });

    // 05.최상단으로 이동
    $(window).on('scroll', function() {

		if($(this).scrollTop()>600){
			$(".go_top").stop().fadeIn();
		}else{
			$(".go_top").stop().fadeOut();
		}

  	  $(".go_top").on("click", function(evt) {
  	    $("html, body").stop().animate({
  	      "scrollTop": 0
  	    }, 400, "easeInCubic");
  	    evt.preventDefault();
  	  });

      });


});

//06.메인 회사소개 마우스 오버
$(document).ready(function() {

	var mAbout = $(".main_about > article");
	var overlay = $(".overlay_bg");


	mAbout.on('mouseenter', function(evt){

		nowIdx = mAbout.index($(this));
		overlay.eq(nowIdx).stop().fadeIn(400);
		evt.preventDefault();
	});

	mAbout.on('mouseleave', function(evt){

		nowIdx = mAbout.index($(this));
		overlay.eq(nowIdx).stop().fadeOut(400);
		evt.preventDefault();
	});

});

//07.레이더차트

var graphData = {
  type: "radar",
  data: {
    labels: [
      "Axes 1",
      "Axes 2",
      "Axes 3",
      "Axes 4",
      "Axes 5",
      "Axes 6",
      "Axes 7"
    ],

    datasets: [
      {
        label: "DataSeries",
        fill: true,
        lineTension: 0,
        backgroundColor: "rgba(75,192,192,0.3)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "rgba(75,192,192,0.5)",
        pointBorderWidth: 2,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: [30, 5, 30, 20, 30, 25, 50],
        spanGaps: false
      },
      {
       label: "Control",
        fill: false,
        lineTension: 0,
        //backgroundColor: "rgba(75,192,192,0.3)",
        borderColor: "rgba(255,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [5,10],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(255,192,192,1)",
        pointBackgroundColor: "rgba(255,192,192,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(255,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 20,
        data: [40, 40, 40, 30, 20, 40, 40],
        spanGaps: false
      }
    ]
  },
  options: {
    scale: {
      ticks: {
        min: 0, // suggestedMin: 0,
        max: 50, //suggestedMax: 50
        stepSize: 10
      }
    },
    animation: {
      duration: 2000,
      easing: "easeOutElastic"
    },
    responsive: true
  }
}


var context = document.getElementById("radarCanvas").getContext("2d");

var radarChart = new Chart(context, graphData); // Works fine

// canvas2svg 'mock' context
var svgContext = C2S(500,500);

// new chart on 'mock' context fails:
var mySvg = new Chart(svgContext, graphData);
// Failed to create chart: can't acquire context from the given item

console.log(svgContext.getSerializedSvg(true));
