import fs from 'fs/promises';
import FileService from '../../../../domain/services/file-service';
import FileServiceInvalidStoreError from '../../errors/file-service-errors';

class FSFileService extends FileService {
  store = async (filename: string, buffer: Buffer): Promise<void> => {
    try {
      const path = `${this.directory}/${filename}`;
      console.log('🚀 ~ file: fs-file-service.ts:8 ~ FSFileService ~ store= ~ path:', path);
      await fs.writeFile(path, buffer, 'utf8');
    } catch (e) {
      this.loggerService.error(FileServiceInvalidStoreError.message, e as Error);
      throw FileServiceInvalidStoreError;
    }
  };
}

export default FSFileService;
