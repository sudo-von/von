abstract class FileService {
  /**
  * Creates an instance of FileService.
  * @param directory The directory where the files are contained.
  */
  constructor(protected directory: string) {}

  /**
  * Deletes a file with the provided filename.
  * @param filename The name of the file to be deleted.
  * @returns A promise that resolves when the file has been successfully deleted.
  */
  abstract delete: (filename: string) => Promise<void>;

  /**
  * Uploads a file provided as a data buffer.
  * @param filename The name of the file.
  * @param buffer The buffer containing the file data.
  * @returns A promise that resolves with the path where the file was uploaded.
  */
  abstract upload: (filename: string, buffer: Buffer) => Promise<string>;
}

export default FileService;
