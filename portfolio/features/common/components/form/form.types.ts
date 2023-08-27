export type Form<Fields> = {
  [field in keyof Fields]: {
    value: Fields[field];
    hint?: string;
    error?: boolean;
  };
};
