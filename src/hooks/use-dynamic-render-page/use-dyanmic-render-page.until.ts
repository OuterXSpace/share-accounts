import { ISystemConfig, IThemeResult } from './use-dynamic-render-page.type';

const findThemeRecursive = (config: ISystemConfig | IThemeResult, segments: string[]): IThemeResult | undefined => {
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

  return nextConfig ? findThemeRecursive(nextConfig, remainingSegments) : undefined;
};

export const findTheme = (systemConfig: ISystemConfig, path: string): IThemeResult | undefined => {
  let pathSegments = path.split('/').filter((segment) => segment !== '');
  let currentConfig: ISystemConfig = systemConfig;

  if (pathSegments.length === 0) {
    currentConfig = systemConfig['/'];
    pathSegments = ['/'];
  }

  if (!Object.prototype.hasOwnProperty.call(systemConfig, `/${pathSegments[0]}`)) {
    currentConfig = systemConfig['/'];
  }

  return findThemeRecursive(currentConfig, pathSegments);
};
