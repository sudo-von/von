import {
  Vector,
  CreateVectorFile,
  UpdateVectorFile,
} from '../../entities/vector-entity/vector-entities';
import FileService from '../../services/file-service/file-service';
import ISecurityService from '../../services/security-service/security-service';
import IVectorRepository from '../../repositories/vector-repository/vector-repository';
import IContentRepository from '../../repositories/content-repository/content-repository';

abstract class VectorUsecase {
  /**
  * Creates an instance of VectorUsecase.
  * @param {FileService} fileService - The file service for file operations.
  * @param {SecurityService} securityService - The security service for cryptographic operations.
  * @param {IVectorRepository} vectorRepository - The vector repository.
  * @param {IContentRepository} contentRepository - The content repository.
  */
  constructor(
    protected readonly fileService: FileService,
    protected readonly securityService: ISecurityService,
    protected readonly vectorRepository: IVectorRepository,
    protected readonly contentRepository: IContentRepository,
  ) {}

  /**
  * Generates a filename for a vector.
  * @returns {string} The generated vector filename.
  */
  abstract generateVectorFilename: ()
  => string;

  /**
  * Creates a vector by content ID.
  * @param {string} id - The ID of the content.
  * @param {CreateVectorFile} payload - The object containing the data to create the vector.
  * @returns {Promise<Vector>} - A promise with the created vector object.
  */
  abstract createVectorByContentId: (id: string, payload: CreateVectorFile)
  => Promise<Vector>;

  /**
  * Updates a vector by ID.
  * @param {string} id - The ID of the vector.
  * @param {UpdateVectorFile} payload - The object containing the data to update the vector.
  * @returns {Promise<Vector>} - A promise with the updated vector object.
  */
  abstract updateVectorById: (id: string, payload: UpdateVectorFile)
  => Promise<Vector>;
}

export default VectorUsecase;
