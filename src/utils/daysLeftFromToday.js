const daysLeftFromToday = (value) => {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor(
    (timeValue.getTime() - today.getTime()) / 1000 / 60
  );

  if (betweenTime < 1) return false;

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `D-Day`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  return `D-${betweenTimeDay}`;
};

export default daysLeftFromToday;
