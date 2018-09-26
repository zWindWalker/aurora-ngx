import { clone } from './DateUtils';
import { getFirstDayOfWeek } from './LocaleUtils';

const startOfMonth = date => {
  const newDate = clone(date);
  newDate.setDate(1);
  newDate.setHours(12, 0, 0, 0); // always set noon to avoid time zone issues
  return newDate;
};

const getFirstDayOfMonth = date => new Date(date.getFullYear(), date.getMonth(), 1, 12);

const getDaysInMonth = date => {
  const resultDate = getFirstDayOfMonth(date);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
};

const getWeekArray = date => {
  const firstDayOfWeek = getFirstDayOfWeek();

  const daysInMonth = getDaysInMonth(date);
  const dayArray = [];

  let week = [];
  const weekArray = [];

  for (let i = 1; i <= daysInMonth; i += 1) {
    dayArray.push(new Date(date.getFullYear(), date.getMonth(), i, 12));
  }

  dayArray.forEach(day => {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      weekArray.push(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      weekArray.push(week);
    }
  });

  // unshift days to start the first week
  const firstWeek = weekArray[0];
  for (let i = 7 - firstWeek.length; i > 0; i -= 1) {
    const outsideDate = clone(firstWeek[0]);
    outsideDate.setDate(firstWeek[0].getDate() - 1);
    firstWeek.unshift(outsideDate);
  }

  // push days until the end of the last week
  const lastWeek = weekArray[weekArray.length - 1];
  for (let i = lastWeek.length; i < 7; i += 1) {
    const outsideDate = clone(lastWeek[lastWeek.length - 1]);
    outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
    lastWeek.push(outsideDate);
  }

  return weekArray;
};

export default {
  startOfMonth,
  getWeekArray
};