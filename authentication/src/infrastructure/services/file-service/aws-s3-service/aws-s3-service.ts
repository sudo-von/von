import { S3, AWSError } from "aws-sdk";
import {
  FileServiceEntityNotFoundError,
  FileServiceFailedToDeleteError,
  FileServiceFailedToUploadError,
} from '../file-service-errors';
import FileService from '../../../../domain/services/file-service/file-service';

class AWSS3Service extends FileService {
  private readonly s3: S3;

  constructor(
    protected readonly directory: string,
    protected readonly S3_BUCKET: string,
    AWS_SECRET_ACCESS_KEY: string,
    AWS_ACCESS_KEY_ID: string,
    S3_REGION: string,
  ) {
    super(directory);
    this.s3 = new S3({
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      accessKeyId: AWS_ACCESS_KEY_ID,
      region: S3_REGION,
    });
  }

  getFilePath = (
    filename: string,
  ): string => `${this.directory}/${filename}`;

  deleteFile = async (
    filename: string,
  ): Promise<void> => {
    try {
      const path = this.getFilePath(filename);
      await this.s3.deleteObject({ Bucket: this.S3_BUCKET, Key: path }).promise();
    } catch (e) {
      const { code, message } = e as AWSError;
      if (code === 'NoSuchKey') {
        throw FileServiceEntityNotFoundError(message);
      }
      throw FileServiceFailedToDeleteError(message);
    }
  };

  uploadFile = async (
    filename: string,
    buffer: Buffer,
  ): Promise<string> => {
    try {
      const path = this.getFilePath(filename);
      const { Location: location } = await this.s3.upload({ Bucket: this.S3_BUCKET, Key: path, Body: buffer }).promise();
      return location;
    } catch (e) {
      const { code, message } = e as AWSError;
      if (code === 'NoSuchKey') {
        throw FileServiceEntityNotFoundError(message);
      }
      throw FileServiceFailedToUploadError(message);
    }
  };
}

export default AWSS3Service;
