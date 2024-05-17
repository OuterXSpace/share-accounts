import { EDayOfWeek } from '../../models/day-of-week.model';

export const dayToDayOfWeek = (day: number) => {
  switch (day) {
    case 0:
      return EDayOfWeek.SUN;
    case 1:
      return EDayOfWeek.MON;
    case 2:
      return EDayOfWeek.TUE;
    case 3:
      return EDayOfWeek.WED;
    case 4:
      return EDayOfWeek.THU;
    case 5:
      return EDayOfWeek.FRI;
    case 6:
      return EDayOfWeek.SAT;

    default:
      return EDayOfWeek.ALL;
  }
};
