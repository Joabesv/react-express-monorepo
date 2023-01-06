export const PORT = process.env.PORT ?? 3000;
export const HOST = process.env.HOST ?? '0.0.0.0';
export const SERVER_URL = `http://${HOST}:${PORT}`;
export const MONGODB_URI =
  process.env.MONGODB_URI ?? `mongodb://localhost:27017`;
export const DATABASE_NAME = process.env.DB_NAME ?? 'local';
