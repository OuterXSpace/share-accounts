import { ISystemConfig, IThemeResult } from '../../models';

const isThemeResult = (config: ISystemConfig | IThemeResult | undefined): config is IThemeResult => {
  return !!config && 'theme' in config && 'className' in config && 'array' in config;
};

const isSystemConfig = (config: ISystemConfig | IThemeResult | undefined): config is ISystemConfig => {
  return !!config && typeof config === 'object' && !Array.isArray(config);
};

const findThemeRecursive = (config: ISystemConfig | IThemeResult, segments: string[]): IThemeResult | undefined => {
  if (segments.length === 0 || segments[0] === '/') {
    if (isThemeResult(config)) {
      return config;
    }
    return undefined;
  }

  const currentSegment = segments[0];
  const remainingSegments = segments.slice(1);

  let nextConfig = config[currentSegment] as ISystemConfig | IThemeResult | undefined;
  if (!nextConfig && '[id]' in config) {
    nextConfig = config['[id]'] as ISystemConfig | IThemeResult;
  }

  if (isSystemConfig(nextConfig) || isThemeResult(nextConfig)) {
    return findThemeRecursive(nextConfig, remainingSegments);
  }

  return undefined;
};

export const findTheme = (systemConfig: ISystemConfig, path: string): IThemeResult | undefined => {
  const pathSegments = path.split('/').filter((segment) => segment !== '');

  if (pathSegments.length === 0) {
    return systemConfig['/'] as IThemeResult;
  }

  let currentConfig: ISystemConfig | IThemeResult = systemConfig;

  if (!Object.prototype.hasOwnProperty.call(systemConfig, `/${pathSegments[0]}`)) {
    currentConfig = systemConfig['/'];
  }

  return findThemeRecursive(currentConfig, pathSegments);
};
