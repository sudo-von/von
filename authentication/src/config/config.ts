type Config = {
  port: number;
};

export const config: Config = {
  port: parseInt(process.env.PORT || "3000"),
};
