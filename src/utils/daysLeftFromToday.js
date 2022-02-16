const daysLeftFromToday = (value) => {
  const now = new Date();
  const today = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const timeValue = new Date(value);

  const betweenTime = Math.floor((timeValue.getTime() - today) / 1000 / 60);

  if (betweenTime < 1) return false;

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `D-Day`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  return `D-${betweenTimeDay}`;
};

export default daysLeftFromToday;
