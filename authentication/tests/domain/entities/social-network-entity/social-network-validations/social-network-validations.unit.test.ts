import socialNetworkValidations from '../../../../../src/domain/entities/social-network-entity/social-network-rules';
import {
  validateFileSize,
  validateUrlLength,
  validateNameLength,
  validateFileMimetype,
} from '../../../../../src/domain/entities/social-network-entity/social-network-validations/social-network-validations';

describe('social network validations', () => {
  describe('when minimum length is valid', () => {
    it('should return true when name is validated', () => {
      const name = 'a'.repeat(socialNetworkValidations.name.MIN_LENGTH);
      expect(validateNameLength(name)).toBeTruthy();
    });

    it('should return true when url is validated', () => {
      const url = 'a'.repeat(socialNetworkValidations.url.MIN_LENGTH);
      expect(validateUrlLength(url)).toBeTruthy();
    });
  });

  describe('when maximum length is valid', () => {
    it('should return true when name is validated', () => {
      const name = 'a'.repeat(socialNetworkValidations.name.MAX_LENGTH);
      expect(validateNameLength(name)).toBeTruthy();
    });

    it('should return true when url is validated', () => {
      const url = 'a'.repeat(socialNetworkValidations.url.MAX_LENGTH);
      expect(validateUrlLength(url)).toBeTruthy();
    });
  });

  describe('when minimum length is invalid', () => {
    it('should return false when name is validated', () => {
      const name = 'a'.repeat(socialNetworkValidations.name.MIN_LENGTH - 1);
      expect(validateNameLength(name)).toBeFalsy();
    });

    it('should return false when url is validated', () => {
      const url = 'a'.repeat(socialNetworkValidations.url.MIN_LENGTH - 1);
      expect(validateUrlLength(url)).toBeFalsy();
    });
  });

  describe('when maximum length is invalid', () => {
    it('should return false when name is validated', () => {
      const name = 'a'.repeat(socialNetworkValidations.name.MAX_LENGTH + 1);
      expect(validateNameLength(name)).toBeFalsy();
    });

    it('should return false when url is validated', () => {
      const url = 'a'.repeat(socialNetworkValidations.url.MAX_LENGTH + 1);
      expect(validateUrlLength(url)).toBeFalsy();
    });
  });

  describe('when mimetype is validated', () => {
    it('should return true when mimetypes are valid', () => {
      const mimetypes = socialNetworkValidations.mimetype.ALLOWED_MIMETYPES;
      mimetypes.forEach((mimetype) => {
        expect(validateFileMimetype(mimetype)).toBeTruthy();
      });
    });
    it('should return false when mimetypes are invalid', () => {
      const mimetypes = socialNetworkValidations.mimetype.ALLOWED_MIMETYPES;
      mimetypes.forEach((mimetype) => {
        expect(validateFileMimetype(`invalid-${mimetype}`)).toBeFalsy();
      });
    });
  });

  describe('when minimum bytes are valid', () => {
    it('should return true when bytes are valid', () => {
      const size = socialNetworkValidations.size.MIN_BYTES;
      expect(validateFileSize(size)).toBeTruthy();
    });
  });

  describe('when maximum bytes are valid', () => {
    it('should return true when bytes are valid', () => {
      const size = socialNetworkValidations.size.MAX_BYTES;
      expect(validateFileSize(size)).toBeTruthy();
    });
  });

  describe('when minimum bytes are invalid', () => {
    it('should return false when bytes are invalid', () => {
      const size = socialNetworkValidations.size.MIN_BYTES - 1;
      expect(validateFileSize(size)).toBeFalsy();
    });
  });

  describe('when maximum bytes are invalid', () => {
    it('should return false when bytes are invalid', () => {
      const size = socialNetworkValidations.size.MAX_BYTES + 1;
      expect(validateFileSize(size)).toBeFalsy();
    });
  });
});
