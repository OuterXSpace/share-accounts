import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';
import { IUserProfile } from '../../../models';

export const updateProfileAction = mutatorAction('updateProfileAction', (profile: IUserProfile | undefined) => {
  getStore().profile = profile;
});
