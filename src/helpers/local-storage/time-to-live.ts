import dayjs from 'dayjs';

export const lsTimeToLive = {
  set(variable: any, value: any, timeToLiveMs?: number, isSessionStorage?: boolean) {
    const data = {
      value,
      expires_at: timeToLiveMs ? new Date().getTime() + timeToLiveMs / 1 : null,
    };
    (isSessionStorage ? sessionStorage : localStorage).setItem(variable.toString(), JSON.stringify(data));
  },

  get(variable: any, isSessionStorage?: boolean) {
    const storage = isSessionStorage ? sessionStorage : localStorage;
    const data = JSON.parse(storage.getItem(variable.toString()) || (null as any));
    if (data !== null) {
      // * support no live time storage
      if (data.expires_at == null) return data.value;

      if (data.expires_at < new Date().getTime()) {
        storage.removeItem(variable.toString());
      } else {
        return data.value;
      }
    }
    return null;
  },

  daily(variable: any, value: any, hours: number, minutes?: number) {
    const timeToLiveMs = dayjs()
      .add(1, 'day')
      .set('hours', hours)
      .set('minutes', minutes ?? 0)
      .set('second', 0)
      .diff(dayjs());

    this.set(variable, value, timeToLiveMs);
  },
};
