/**
 * Abstract class representing a service for managing file operations.
 * @abstract
 */
abstract class FileService {
  /**
   * Creates an instance of FileService.
   * @param directory The directory where the files are contained.
   */
  constructor(protected readonly directory: string) { }

  /**
   * Retrieves the file path for a given filename.
   * @param {string} filename - The name of the file.
   * @returns {string} The file path for the provided filename.
   */
  abstract getFilePath: (filename: string)
  => string;

  /**
   * Deletes a file with the provided filename.
   * @param filename The name of the file to be deleted.
   * @returns A promise resolving if the file has been successfully deleted.
   */
  abstract deleteFile: (filename: string)
  => Promise<void>;

  /**
   * Uploads a file provided as a data buffer.
   * @param filename The name of the file.
   * @param buffer The buffer containing the file data.
   * @returns {Promise<string>} A promise with the path of the uploaded file.
   */
  abstract uploadFile: (filename: string, buffer: Buffer)
  => Promise<string>;
}

export default FileService;
