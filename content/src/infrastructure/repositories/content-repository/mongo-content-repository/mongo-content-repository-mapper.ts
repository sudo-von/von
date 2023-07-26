import {
  HydratedDocument,
} from 'mongoose';
import { MediaType } from 'express';
import {
  DetailedContent, DetailedContentMedia,
} from '../../../../domain/entities/content-entity/content-entities';
import {
  ContentRepositorySchema,
} from '../../../../domain/repositories/content-repository/content-repository-schema';

const contentDocumentToDetailedContent = (
  document: HydratedDocument<ContentRepositorySchema>,
): DetailedContent => {
  const defaultDocument = {
    id: document._id.toHexString(),
    title: document.title,
    subtitle: document.subtitle,
    username: document.username,
    description: document.description,
  };

  if (!document.media) return defaultDocument;

  let media: DetailedContentMedia;

  if (document.media.type === 'video') {
    media = {
      type: 'video',
      id: document.media,
    };
  }

  return ({
    id: document._id.toHexString(),
    title: document.title,
    subtitle: document.subtitle,
    username: document.username,
    description: document.description,
  });
};

export default contentDocumentToDetailedContent;
