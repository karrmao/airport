import moment from 'moment';

export const calendarFormat = 'YYYY-MM-DD';
export const dayMothFormat = 'DD/MM';

export const getFullYear = arg => moment(arg).format('DD/MM');
export const getHourMinutes = arg => moment(arg).format('HH:mm');

export const curentDate = moment(new Date());
export const nextDate = moment().add(1, 'day');

export const privDate = moment().subtract(1, 'day');

export const getCurrentDate = (day, format) => day.format(format);
