const getEndDate = (value) => {
  const date = new Date(value);
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const weekday = WEEKDAY[date.getDay()];
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");

  return `~ ${month}.${day} (${weekday}) ${hour}:${minute}`;
};

export default getEndDate;
