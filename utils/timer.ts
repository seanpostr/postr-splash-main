const DAYS_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var countDownDate = new Date("Sep 1, 2024 00:00:00 GMT-0400").getTime();

// Update the count down every 1 second
export function updateCountdown() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var month = new Date().getMonth();
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var months = 0;

  for (var i = month; i != 8; ) {
    if (i != month) {
      days -= DAYS_MONTH[i];
      months++;
    }

    if (i == 11) {
      i = 0;
    } else {
      i++;
    }
  }

  // Display the result in the element by id"
  (document.getElementById("months") as any).innerHTML = months;
  (document.getElementById("days") as any).innerHTML = days;
  (document.getElementById("hours") as any).innerHTML = hours;
  (document.getElementById("minutes") as any).innerHTML = minutes;
  (document.getElementById("seconds") as any).innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    (document.getElementById("demo") as any).innerHTML = "EXPIRED";
    return false;
  }

  return true;
}
