const days = [];

for (var month = 0; month <= 11; month++) {
  for (var day = 1; day <= new Date(2023, month + 1, 0).getDate() + 1; day++) {
    var date = new Date(2023, month, day);
    days.push(date.toUTCString().slice(5, 16).replaceAll(" ", "-"));
  }
}

days.shift();

export const daysThisYear = Array.from(new Set(days));


const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const monthsThisYear = [[], [], [], [], [], [], [], [], [], [], [], []];

daysThisYear.forEach((day) => {
  for (let month in months) {
    day.includes(months[month]) && monthsThisYear[month].push(day)
  }
})

export const monthsContainsDays = monthsThisYear;
