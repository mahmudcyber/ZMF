/***************Clock****************/
function digitaClock () {
	// body...
	var date = new Date();

	var day =date.getDay() + '';
	var hours =date.getHours() + '' ;
	var minutes =date.getMinutes() +'' ;
	var seconds =date.getSeconds() +'' ;

	if (hours.length < 2) {
		hours = '0' + hours;
	}

	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}	

	if (seconds.length < 2) {
		seconds = '0' + seconds;
		}

	var weekDays = ['Sun','Mon',
	'Tue','Wed','Thur','Fri','Sat'];	 
	var clock =date.toDateString() + ", " + hours+':'+minutes+':'+seconds;
	document.getElementById('clock').innerHTML = clock;
}
setInterval(digitaClock, 1000);

