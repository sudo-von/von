const videoRules = {
  alt: {
    content: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 20,
    },
  },
  url: {
    content: {
      MIN_LENGTH: 15,
      MAX_LENGTH: 80,
    },
  },
} as const;

export default videoRules;
