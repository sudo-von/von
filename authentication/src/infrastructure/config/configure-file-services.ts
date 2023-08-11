import {
  resolve,
} from 'path';
import FsFileService from '../services/file-service/fs-file-service/fs-file-service';

const configureFileServices = () => {
  const avatarDirectory = resolve('public', 'avatars');
  const socialNetworkDirectory = resolve('public', 'social-networks');

  const avatarFileService = new FsFileService(avatarDirectory);
  const socialNetworksFileService = new FsFileService(socialNetworkDirectory);

  return {
    avatarFileService,
    socialNetworksFileService,
  };
};

export default configureFileServices;
