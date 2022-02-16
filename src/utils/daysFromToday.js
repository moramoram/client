const daysFromToday = (value) => {
  const now = new Date();
  const today = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return "방금 전";
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 7) {
    return `${betweenTimeDay}일 전`;
  }

  const betweenTimeDayWeek = Math.floor(betweenTime / 60 / 24 / 7);
  if (betweenTimeDayWeek < 4) {
    return `${betweenTimeDayWeek}주 전`;
  }

  const betweenTimeDayMonth = Math.floor(betweenTime / 60 / 24 / 30);
  if (betweenTimeDayMonth < 12) {
    return `${betweenTimeDayMonth}개월 전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년 전`;
};

export default daysFromToday;
