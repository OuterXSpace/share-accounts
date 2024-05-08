export function generateProcessId(context: string, processTokens: string[]) {
  return `${context}-${processTokens.join('-')}`;
}
