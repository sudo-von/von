interface ServerConfig {
  port: number
}

export const serverConfig: ServerConfig = {
  port: parseInt(process.env.PORT ?? '3000')
};
