const days = [];

for (var month = 0; month <= 11; month++) {
  for (var day = 1; day <= new Date(2023, month + 1, 0).getDate() + 1; day++) {
    var date = new Date(2023, month, day);
    days.push(date.toUTCString().slice(5, 16));
  }
}

days.shift();
export const daysThisYear = Array.from(new Set(days));
