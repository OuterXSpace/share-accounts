export function classNameStringify(className: string) {
  let stringifyClassName = className;
  stringifyClassName = stringifyClassName.replace(/\s+/g, ' ');
  stringifyClassName = stringifyClassName.trim();
  return stringifyClassName;
}
