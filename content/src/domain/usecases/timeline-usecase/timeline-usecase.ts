import {
  Timeline,
  CreateTimelineFile,
  UpdateTimelineFile,
} from '../../entities/timeline-entity/timeline-entities';
import FileService from '../../services/file-service/file-service';
import ISecurityService from '../../services/security-service/security-service';
import IContentRepository from '../../repositories/content-repository/content-repository';

abstract class TimelineUsecase {
  /**
  * Creates an instance of TimelineUsecase.
  * @param {FileService} fileService - The file service for file operations.
  * @param {SecurityService} securityService - The security service for cryptographic operations.
  * @param {IContentRepository} contentRepository - The content repository.
  */
  constructor(
    protected readonly fileService: FileService,
    protected readonly securityService: ISecurityService,
    protected readonly contentRepository: IContentRepository,
  ) {}

  /**
  * Generates a timeline filename for a timeline.
  * @param {string} mimetype - The mimetype of the timeline file.
  * @returns {string} The generated timeline filename.
  */
  abstract generateTimelineFilename: (mimetype: string)
  => string;

  /**
  * Creates a timeline by content ID.
  * @param {string} id - The ID of the content.
  * @param {CreateTimelineFile} payload - The object containing the data to create the timeline.
  * @returns {Promise<Timeline>} - A promise with the created timeline object.
  */
  abstract createTimelineByContentId: (id: string, payload: CreateTimelineFile)
  => Promise<Timeline>;

  /**
  * Updates a timeline by ID.
  * @param {string} id - The ID of the timeline.
  * @param {UpdateTimelineFile} payload - The object containing the data to update the timeline.
  * @returns {Promise<Timeline>} - A promise with the updated timeline object.
  */
  abstract updateTimelineById: (id: string, payload: UpdateTimelineFile)
  => Promise<Timeline>;
}

export default TimelineUsecase;
