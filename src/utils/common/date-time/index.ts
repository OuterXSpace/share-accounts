import dayjs from 'dayjs';

export function newDayjs(data: dayjs.Dayjs | string | (() => string)): dayjs.Dayjs {
  if (dayjs.isDayjs(data)) return data;
  if (typeof data === 'function') data = data();
  return dayjs(data);
}

export function durationToTime(data: dayjs.Dayjs | string | (() => string)) {
  const time = newDayjs(data);
  return dayjs.duration(time.diff(dayjs()));
}

export function secondsToDuration(seconds: number | (() => number)) {
  return dayjs.duration(typeof seconds === 'number' ? seconds : seconds());
}
