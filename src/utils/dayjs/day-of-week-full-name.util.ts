import { EDayOfWeek } from '../../models/day-of-week.model';

export const dayOfWeekFullName = (day: EDayOfWeek) => {
  switch (day) {
    case EDayOfWeek.MON:
      return 'MONDAY';
    case EDayOfWeek.TUE:
      return 'TUESDAY';
    case EDayOfWeek.WED:
      return 'WEDNESDAY';
    case EDayOfWeek.THU:
      return 'THURSDAY';
    case EDayOfWeek.FRI:
      return 'FRIDAY';
    case EDayOfWeek.SAT:
      return 'SATURDAY';
    case EDayOfWeek.SUN:
      return 'SUNDAY';
    default:
      return '';
  }
};

export const parseDayOfWeekFromName = (dayName?: string): EDayOfWeek => {
  switch (dayName?.toUpperCase()) {
    case 'MONDAY':
      return EDayOfWeek.MON;
    case 'TUESDAY':
      return EDayOfWeek.TUE;
    case 'WEDNESDAY':
      return EDayOfWeek.WED;
    case 'THURSDAY':
      return EDayOfWeek.THU;
    case 'FRIDAY':
      return EDayOfWeek.FRI;
    case 'SATURDAY':
      return EDayOfWeek.SAT;
    case 'SUNDAY':
      return EDayOfWeek.SUN;
    default:
      return EDayOfWeek.ALL;
  }
};
