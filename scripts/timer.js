var cakedaysammy = 'May 2 2016 09:00:00 GMT+01:00'

function getTimeSpent(cakeday){
  var t = Date.parse(new Date()) - Date.parse(cakeday);
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

var clock = document.getElementById('timeleft');
var timeinterval = setInterval(function(){
  var t = getTimeSpent(cakedaysammy);
  clock.innerHTML = 'days: ' + t.days + '<br>' +
                    'hours: '+ t.hours + '<br>' +
                    'minutes: ' + t.minutes + '<br>' +
                    'seconds: ' + t.seconds;
},1000)
