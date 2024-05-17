export function sumMap<K, T extends Record<string, any>>(map: Map<K, T>, fieldName: keyof T): number {
  let amount = 0;
  map.forEach((item) => {
    amount += item[fieldName];
  });
  return amount;
}
