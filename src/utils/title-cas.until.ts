export function toTitleCase(str?: string, split?: string) {
  if (!str) return '';
  return str
    .split(split || '_')
    .join(' ')
    .replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
