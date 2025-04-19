import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { verifyConnection } from "./database/index";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await verifyConnection();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

startServer();
