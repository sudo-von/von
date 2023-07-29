const videoRules = {
  url: {
    content: {
      MIN_LENGTH: 30,
      MAX_LENGTH: 80,
      ALLOWED_DOMAINS: ['https://www.youtube.com/embed/'],
    },
  },
};

export default videoRules;
