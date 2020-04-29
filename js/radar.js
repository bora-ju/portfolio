//레이더차트

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


var context = document.getElementById("radarCanvas2").getContext("2d");

var radarChart = new Chart(context, graphData); // Works fine

// canvas2svg 'mock' context
var svgContext = C2S(500,500);

// new chart on 'mock' context fails:
var mySvg = new Chart(svgContext, graphData);
// Failed to create chart: can't acquire context from the given item

console.log(svgContext.getSerializedSvg(true));


//.백그라운드 이미지 픽스

$( document ).ready(function() {
	//Waypoints
	$('.under-inner').each(function(){
		var $this = $(this);
		$this.waypoint(function(direction) {
			if (direction === 'down') {
			  $this.children(".fixed").addClass('locked');
			}else{
			  $this.children(".fixed").removeClass('locked');
			}
		}, { offset: '60%' });
	});
	//End Waypoints
});



function play_video_on_scroll() {

	// iframe video
	$('.iframe_video_container').each( function(){

		var $this = $(this);
        var flag = true;
        var waypoint_flag = true;

		if(!is_browser_ie9() && !is_mobile()) { // IE9이상, 모바일 아닐때

			var iframe = $this.find('iframe')[0];
			var video = new Vimeo.Player(iframe);

			if(video){

                video.on('timeupdate', function(data) {
                    if(flag && data.seconds > 0) {
                        // $this.find('iframe').css({'opacity': 1, 'visibility': 'visible'});
                        $this.find('.iframe_poster').hide();
                        flag = false;

                        if(waypoint_flag) {
                            video.pause();
                        }
                    }
                });

				new Waypoint.Inview({
					element: $this,
					enter: function(direction) {
                        waypoint_flag = false;
						video.play();
					},
					exited: function(direction) {
                        waypoint_flag = true;
						video.pause();
					}
				});
			}

		} else {

			$this.find('iframe').remove();
            $this.find('.iframe_support').show();

		}

	});


	// video
	$('.video_container').each( function(){

		if(!is_browser_ie8()){
			var $this = $(this);
			var vid = $this.find('video').get(0);

			if(vid){
				vid.playbackRate = 1.25;

				new Waypoint.Inview({
					element: $this,
					enter: function(direction) {
						vid.play();
					},
					exited: function(direction) {
						vid.pause();
					}
				});
			}
		}

	});
