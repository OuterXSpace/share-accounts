import { REGEX_LINK_IMAGE } from '../../constants/configuration.constant';
import { IAbstractFile } from './abstract.file.service';

export class S3FileService implements IAbstractFile {
  buildURL(path: string | undefined, alt?: string): string {
    const checkLink = new RegExp(REGEX_LINK_IMAGE);

    if (path) {
      if (path.match?.(checkLink)?.[0] as string) return path;

      return alt ?? `/assets/public${path}`;
    }
    return alt ?? '';
  }
}
