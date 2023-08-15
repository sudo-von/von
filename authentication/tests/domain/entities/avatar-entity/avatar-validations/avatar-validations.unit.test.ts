import avatarRules from '../../../../../src/domain/entities/avatar-entity/avatar-rules';
import {
  validateFileSize,
  validateFileMimetype,
} from '../../../../../src/domain/entities/avatar-entity/avatar-validations/avatar-validations';

describe('avatar validations', () => {
  describe('when mimetypes are valid', () => {
    it('should return true when mimetypes are validated', () => {
      const mimetypes = avatarRules.mimetype.ALLOWED_MIMETYPES;
      mimetypes.forEach((mimetype) => {
        expect(validateFileMimetype(mimetype)).toBeTruthy();
      });
    });
  });

  describe('when mimetypes are invalid', () => {
    it('should return false when mimetypes are validated', () => {
      const mimetypes = avatarRules.mimetype.ALLOWED_MIMETYPES;
      mimetypes.forEach((mimetype) => {
        expect(validateFileMimetype(`invalid-${mimetype}`)).toBeFalsy();
      });
    });
  });

  describe('when minimum byte size is valid', () => {
    it('should return true when byte size is validated', () => {
      const size = avatarRules.size.MIN_BYTES;
      expect(validateFileSize(size)).toBeTruthy();
    });
  });

  describe('when maximum byte size is valid', () => {
    it('should return true when byte size is validated', () => {
      const size = avatarRules.size.MAX_BYTES;
      expect(validateFileSize(size)).toBeTruthy();
    });
  });

  describe('when minimum byte size is invalid', () => {
    it('should return false when byte size is validated', () => {
      const size = avatarRules.size.MIN_BYTES - 1;
      expect(validateFileSize(size)).toBeFalsy();
    });
  });

  describe('when maximum byte size is invalid', () => {
    it('should return false when byte size is validated', () => {
      const size = avatarRules.size.MAX_BYTES + 1;
      expect(validateFileSize(size)).toBeFalsy();
    });
  });
});
