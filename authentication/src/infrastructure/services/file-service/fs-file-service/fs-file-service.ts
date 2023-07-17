import {
  unlink,
  writeFile,
} from 'fs/promises';
import {
  FileServiceEntityNotFoundError,
  FileServiceFailedToDeleteError,
  FileServiceFailedToUploadError,
} from '../file-service-errors';
import FileService from '../../../../domain/services/file-service/file-service';

class FsFileService extends FileService {
  delete = async (filename: string): Promise<void> => {
    try {
      const path = `${this.directory}/${filename}`;
      await unlink(path);
    } catch (e) {
      const { name, message } = e as Error;
      if (name === 'ENOENT') {
        throw FileServiceEntityNotFoundError(message);
      }
      throw FileServiceFailedToDeleteError(message);
    }
  };

  upload = async (filename: string, buffer: Buffer): Promise<void> => {
    try {
      const path = `${this.directory}/${filename}`;
      await writeFile(path, buffer, 'utf8');
    } catch (e) {
      const { name, message } = e as Error;
      if (name === 'ENOENT') {
        throw FileServiceEntityNotFoundError(message);
      }
      throw FileServiceFailedToUploadError(message);
    }
  };
}

export default FsFileService;
