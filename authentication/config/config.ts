type Config = {
  port: number;
};

const config: Config = {
  port: parseInt(process.env.PORT || "3000"),
};
