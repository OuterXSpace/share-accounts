export const doesPathExist = (paths: string[], targetPath: string): boolean =>
  paths.some((path) => new RegExp(`^${path.replace(/:[^\s/]+/g, '([\\w-]+)')}$`).test(targetPath.split('?')[0]));
