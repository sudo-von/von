interface DatabaseConfig {
  url: string;
  user: string;
  password: string;
}

const databaseConfig: DatabaseConfig = {
  url: process.env.DATABASE_URL || '',
  user: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
};

export default databaseConfig;
