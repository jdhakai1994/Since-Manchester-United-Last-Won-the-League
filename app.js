$(document).ready(function(){
	$("#logo").fadeIn(4000);

	var curr_date = new Date();
	var last_won_date = new Date("Tue May 19 2013 22:35:00 GMT+0530");
	
	var milli_last_won = last_won_date.getTime();
	var milli_curr = curr_date.getTime();
	var interval = milli_curr - milli_last_won;

	var msecPerMinute = 1000 * 60;
	var msecPerHour = msecPerMinute * 60;
	var msecPerDay = msecPerHour * 24;
	var daysPerYear = 365;
	var daysPerMonth = 30;
	// Calculate how many days the interval contains. Subtract that
	// many days from the interval to determine the remainder.

	var days = Math.floor(interval / msecPerDay );
	interval = interval - (days * msecPerDay );

	var years = Math.floor(days / daysPerYear);
	days = days - (years * daysPerYear);

	var months = Math.floor(days / daysPerMonth);
	days = days - (months * daysPerMonth);

	// Calculate the hours, minutes, and seconds.
	var hours = Math.floor(interval / msecPerHour );
	interval = interval - (hours * msecPerHour );

	var minutes = Math.floor(interval / msecPerMinute );
	interval = interval - (minutes * msecPerMinute );

	var seconds = Math.floor(interval / 1000 );

	$(".seconds").text(seconds);
	$(".minutes").text(minutes);
	$(".hours").text(hours);
	$(".days").text(days);
	$(".months").text(months);
	$(".years").text(years);

	var time_interval = setInterval(changeSeconds, 1000);

	function changeSeconds () {
		var curr_seconds = $(".seconds").text();
		curr_seconds ++;
		if(curr_seconds <= 60){
			$(".seconds").html(curr_seconds);
		}
		else{
			curr_seconds = 0;
			$(".seconds").html(curr_seconds);
			changeMinutes();
		}
	}
	
	function changeMinutes () {
		var curr_minutes = $(".minutes").text();
		curr_minutes ++;
		if(curr_minutes <= 60){
			$(".minutes").html(curr_minutes);
		}
		else{
			curr_minutes = 0;
			$(".minutes").html(curr_minutes);
			changeHours();
		}
	}

	function changeHours () {
		var curr_hours = $(".hours").text();
		curr_hours ++;
		if(curr_hours <= 24){
			$(".hours").html(curr_hours);
		}
		else{
			curr_hours = 0;
			$(".hours").html(curr_hours);
		}
	}

});