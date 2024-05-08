import { IAbstractFile } from './abstract.file.service';
import { S3FileService } from './s3.file.service';

export class FileService extends S3FileService implements IAbstractFile {
  private static instance: FileService;

  public static getInstance(): FileService {
    if (!FileService.instance) {
      FileService.instance = new FileService();
    }

    return FileService.instance;
  }
}
