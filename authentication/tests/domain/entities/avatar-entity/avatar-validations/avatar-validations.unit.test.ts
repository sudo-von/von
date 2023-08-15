import avatarRules from '../../../../../src/domain/entities/avatar-entity/avatar-rules';
import {
  validateFileSize,
  validateFileMimetype,
} from '../../../../../src/domain/entities/avatar-entity/avatar-validations/avatar-validations';

describe('avatar validations', () => {
  describe('when mimetype is validated', () => {
    it('should return true when mimetypes are valid', () => {
      const mimetypes = avatarRules.mimetype.ALLOWED_MIMETYPES;
      mimetypes.forEach((mimetype) => {
        expect(validateFileMimetype(mimetype)).toBeTruthy();
      });
    });
    it('should return false when mimetype are invalid', () => {
      const mimetypes = avatarRules.mimetype.ALLOWED_MIMETYPES;
      mimetypes.forEach((mimetype) => {
        expect(validateFileMimetype(`invalid-${mimetype}`)).toBeFalsy();
      });
    });
  });

  describe('when minimum bytes are valid', () => {
    it('should return true when bytes are valid', () => {
      const size = avatarRules.size.MIN_BYTES;
      expect(validateFileSize(size)).toBeTruthy();
    });
  });

  describe('when maximum bytes are valid', () => {
    it('should return true when bytes are valid', () => {
      const size = avatarRules.size.MAX_BYTES;
      expect(validateFileSize(size)).toBeTruthy();
    });
  });

  describe('when minimum bytes are invalid', () => {
    it('should return false when bytes are invalid', () => {
      const size = avatarRules.size.MIN_BYTES - 1;
      expect(validateFileSize(size)).toBeFalsy();
    });
  });

  describe('when maximum bytes are invalid', () => {
    it('should return false when bytes are invalid', () => {
      const size = avatarRules.size.MAX_BYTES + 1;
      expect(validateFileSize(size)).toBeFalsy();
    });
  });
});
