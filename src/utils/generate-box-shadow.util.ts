export const generateBoxShadow = (n: number, color: string): string => {
  let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px ${color}`;
  for (let i = 1; i < n; i++) {
    value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px ${color}`;
  }
  return value;
};
