/* Clone a date object.*/
export const clone = date => new Date(date.getTime());

/**
 * Return `true` if the passed value is a valid JavaScript Date object.
 *

 */
export function isDate (value) {
  return value instanceof Date && !isNaN(value.valueOf());
}

export const addMonths = date => {
  const newDate = clone(date);
  newDate.setMonth(date.getMonth() + 1);
  return newDate;
};

export const subtractMonths = date => {
  const newDate = clone(date);
  newDate.setMonth(date.getMonth() - 1);
  return newDate;
};

/**
 * Return `true` if two dates are the same day, ignoring the time.
 *

 */
export const isSameDay = (date1, date2) => {
  if (!date1 || !date2) {
    return false;
  }
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

/**
 * Return `true` if two dates fall in the same month.
 */
export function isSameMonth (d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return (
    d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()
  );
}


export function isDayBefore (d1, d2) {
  const day1 = clone(d1).setHours(0, 0, 0, 0);
  const day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 < day2;
}


export function isDayAfter (d1, d2) {
  const day1 = clone(d1).setHours(0, 0, 0, 0);
  const day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 > day2;
}


export const isPastDay = (d) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return isDayBefore(d, today);
};


export function isFutureDay (d) {
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  tomorrow.setHours(0, 0, 0, 0);
  return d >= tomorrow;
}


export function isDayBetween (d, d1, d2) {
  const date = clone(d);
  date.setHours(0, 0, 0, 0);
  return (
    (isDayAfter(date, d1) && isDayBefore(date, d2)) ||
    (isDayAfter(date, d2) && isDayBefore(date, d1))
  );
}


export function addDayToRange (day, range = { from: null, to: null }) {
  let { from, to } = range;
  if (!from) {
    from = day;
  } else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
    from = null;
    to = null;
  } else if (to && isDayBefore(day, from)) {
    from = day;
  } else if (to && isSameDay(day, to)) {
    from = day;
    to = day;
  } else {
    to = day;
    if (isDayBefore(to, from)) {
      to = from;
      from = day;
    }
  }

  return { from, to };
}


export function isDayInRange (day, range) {
  const { from, to } = range;
  return (
    (from && isSameDay(day, from)) ||
    (to && isSameDay(day, to)) ||
    (from && to && isDayBetween(day, from, to))
  );
}

export default {
  addDayToRange,
  addMonths,
  subtractMonths,
  clone,
  isDate,
  isDayAfter,
  isDayBefore,
  isDayBetween,
  isDayInRange,
  isFutureDay,
  isPastDay,
  isSameDay,
  isSameMonth
};