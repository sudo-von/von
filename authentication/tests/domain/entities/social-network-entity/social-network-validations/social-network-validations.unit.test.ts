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

  describe('when mimetypes are valid', () => {
    it('should return true when mimetypes are validated', () => {
      const mimetypes = socialNetworkValidations.mimetype.ALLOWED_MIMETYPES;
      mimetypes.forEach((mimetype) => {
        expect(validateFileMimetype(mimetype)).toBeTruthy();
      });
    });
  });

  describe('when mimetypes are invalid', () => {
    it('should return false when mimetypes are validated', () => {
      const mimetypes = socialNetworkValidations.mimetype.ALLOWED_MIMETYPES;
      mimetypes.forEach((mimetype) => {
        expect(validateFileMimetype(`invalid-${mimetype}`)).toBeFalsy();
      });
    });
  });

  describe('when minimum byte size is valid', () => {
    it('should return true when byte size is validated', () => {
      const size = socialNetworkValidations.size.MIN_BYTES;
      expect(validateFileSize(size)).toBeTruthy();
    });
  });

  describe('when maximum byte size is valid', () => {
    it('should return true when byte size is validated', () => {
      const size = socialNetworkValidations.size.MAX_BYTES;
      expect(validateFileSize(size)).toBeTruthy();
    });
  });

  describe('when minimum byte size is invalid', () => {
    it('should return false when byte size is validated', () => {
      const size = socialNetworkValidations.size.MIN_BYTES - 1;
      expect(validateFileSize(size)).toBeFalsy();
    });
  });

  describe('when maximum byte size is invalid', () => {
    it('should return false when byte size is validated', () => {
      const size = socialNetworkValidations.size.MAX_BYTES + 1;
      expect(validateFileSize(size)).toBeFalsy();
    });
  });
});
