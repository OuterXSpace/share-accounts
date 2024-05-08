import { computedFn } from 'mobx-utils';
import { UIContentStore } from '../../store-ui-content';
import { CONFIGURATION } from '../../../constants';
import { ISystemConfigModel } from '../../../models';

export const systemConfigSelector = computedFn(() => {
  return UIContentStore.contentSelector<ISystemConfigModel>(CONFIGURATION.SYSTEM_CONFIG_CONTENT_ID_LS_KEY);
});
