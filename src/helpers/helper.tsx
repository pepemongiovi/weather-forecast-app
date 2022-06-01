export const addDays = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);

  return date;
}

export const pad = function (number: number) {
  return ('0' + number).slice(-2)
}