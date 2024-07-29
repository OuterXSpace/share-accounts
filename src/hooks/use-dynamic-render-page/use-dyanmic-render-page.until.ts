import { IThemeResult } from '../../models';

const findThemeRecursive = (config: IThemeResult, segments: string[]): IThemeResult | undefined => {
  if (segments.length === 0 || segments[0] === '/') {
    if ('theme' in config || 'className' in config || 'array' in config) {
      return config as IThemeResult;
    }
    return undefined;
  }

  const currentSegment = `/${segments[0]}`;
  const remainingSegments = segments.slice(1);

  let nextConfig = config[currentSegment];
  if (!nextConfig && '[id]' in config) {
    nextConfig = config['[id]'];
  }

  return nextConfig ? findThemeRecursive(nextConfig as IThemeResult, remainingSegments) : undefined;
};

export const findTheme = (systemConfig: IThemeResult, path: string): IThemeResult | undefined => {
  let pathSegments;
  let currentConfig: IThemeResult = systemConfig;

  if (!path) {
    currentConfig = systemConfig['/'] as IThemeResult;
    pathSegments = ['/'];
  }

  pathSegments = path
    .split('?')[0]
    .split('/')
    .filter((segment) => segment !== '');

  if (pathSegments.length === 0) {
    currentConfig = systemConfig['/'] as IThemeResult;
    pathSegments = ['/'];
  }

  if (!Object.prototype.hasOwnProperty.call(systemConfig, `/${pathSegments[0]}`)) {
    currentConfig = systemConfig['/'] as IThemeResult;
  }

  return findThemeRecursive(currentConfig, pathSegments);
};
