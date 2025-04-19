// types/env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: string;
    HOST?: string;
    USER?: string;
    DATABASENAME?: string;
    PASSWORD?: string;
    // Add other variables like MONGO_URI?: string;
  }
}
