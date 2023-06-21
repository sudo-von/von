export type AboutDto = {
  quote: string;
  interest: string;
  position: string;
};

export type CreateAboutDto = Readonly<AboutDto>;

export type UpdateAboutDto = Readonly<AboutDto>;
