import { CONFIGURATION } from '../../constants';
import { UIContentStore } from '../store-ui-content';

UIContentStore.loadLocalContentAction(CONFIGURATION.SYSTEM_CONFIG_CONTENT_ID_LS_KEY);
UIContentStore.fetchContentAction(CONFIGURATION.SYSTEM_CONFIG_CONTENT_ID_LS_KEY);

export * as SystemConfigStore from './export';
