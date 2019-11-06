let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
let i = 0;
alert(days[i]);

let nextDay = confirm('Want to keep?');
while (nextDay) {
  i += 1;
  alert(days[i]);
  nextDay = confirm('Want to keep?');

  if (i == days.length - 1) {
    i = -1;
  }
}