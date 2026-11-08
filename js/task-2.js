function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }

  let totalCalories = 0;

  for (const day of days) {
    totalCalories += day.calories;
  }

  return totalCalories / days.length;
}

console.log(
  calcAverageCalories([
    { day: '2023-09-01', calories: 2500 },
    { day: '2023-09-02', calories: 2400 },
    { day: '2023-09-03', calories: 2300 },
    { day: '2023-09-04', calories: 2100 },
  ])
); // 2325
console.log(calcAverageCalories([])); // 0
console.log(
  calcAverageCalories([
    { day: '2023-09-01', calories: 2000 },
    { day: '2023-09-02', calories: 2000 },
  ])
); // 2000
