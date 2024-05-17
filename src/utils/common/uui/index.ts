export function getUuid(): string {
  return `uuid${Date.now()}${Math.round(Math.random() * 1000000)}`;
}
