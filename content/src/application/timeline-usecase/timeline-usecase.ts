import {
  TimelineNotFoundError,
  TimelineUpdateFailedError,
} from '../../domain/entities/timeline-entity/timeline-errors';
import {
  ContentNotFoundError,
} from '../../domain/entities/content-entity/content-errors';
import {
  Timeline,
  CreateTimelineFile,
  UpdateTimelineFile,
} from '../../domain/entities/timeline-entity/timeline-entities';
import TimelineUsecase from '../../domain/usecases/timeline-usecase/timeline-usecase';
import validateTimelineFileUpdate from '../../domain/entities/timeline-entity/timeline-validations/update-timeline-file-validations';
import validateTimelineFileCreation from '../../domain/entities/timeline-entity/timeline-validations/create-timeline-file-validations';

class TimelineUsecaseApplication extends TimelineUsecase {
  generateTimelineFilename = ():string => {
    const hash = this.securityService.hashData(new Date().toISOString(), 'md5');
    const filename = `${hash}.svg`;
    return filename;
  };

  createTimelineByContentId = async (
    id: string,
    payload: CreateTimelineFile,
  ): Promise<Timeline> => {
    validateTimelineFileCreation(payload);

    const content = await this.contentRepository.getContent({ id });
    if (!content) throw ContentNotFoundError;

    const timelineFilename = this.generateTimelineFilename();

    await this.fileService.upload(timelineFilename, payload.buffer);

    const createdTimeline = await this.timelineRepository.createTimeline({
      title: payload.title,
      endDate: payload.endDate,
      startDate: payload.startDate,
      description: payload.description,
      filename: timelineFilename,
    });

    return createdTimeline;
  };

  updateTimelineById = async (
    id: string,
    payload: UpdateTimelineFile,
  ): Promise<Timeline> => {
    validateTimelineFileUpdate(payload);

    const timeline = await this.timelineRepository.getTimeline({ id });
    if (!timeline) throw TimelineNotFoundError;

    await this.fileService.delete(timeline.filename);

    const timelineFilename = this.generateTimelineFilename();

    const updatedTimeline = await this.timelineRepository.updateTimeline({
      title: payload.title,
      endDate: payload.endDate,
      startDate: payload.startDate,
      description: payload.description,
      filename: timelineFilename,
    }, { id });
    if (!updatedTimeline) throw TimelineUpdateFailedError;

    return updatedTimeline;
  };
}

export default TimelineUsecaseApplication;
