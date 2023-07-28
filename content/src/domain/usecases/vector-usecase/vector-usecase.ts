import {
  VectorCollection,
  CreateVectorFileCollection,
} from '../../entities/vector-entity/vector-entities';
import FileService from '../../services/file-service/file-service';
import ISecurityService from '../../services/security-service/security-service';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IVectorRepository from '../../repositories/vector-repository/vector-repository';

abstract class VectorUsecase {
  constructor(
    protected readonly fileService: FileService,
    protected readonly userRepository: IUserRepository,
    protected readonly securityService: ISecurityService,
    protected readonly vectorRepository: IVectorRepository,
  ) {}

  abstract createVectorByUsername: (username: string, payload: CreateVectorFileCollection)
  => Promise<VectorCollection>;
}

export default VectorUsecase;
