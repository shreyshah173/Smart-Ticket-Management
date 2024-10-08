import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import cors from "cors";
// import chatRoutes from "./routes/chatRoutes.js"; // Import chat routes
// const chatRoutes = require('./routes/chatRoute');
// import chatRoutes from './routes/chatRoutes.js'
// const chatRoutes = require('./routes/chatRoutes');
import chatRoutes from './routes/chatRoutes.js'; // ES module import



dotenv.config();

const app = express();

// using middleware
app.use(express.json());
app.use(cors());

// Importing routes
import userRoutes from "./routes/userRoutes.js";

// Using routes
app.get("/api", (req, res) => {
  res.send("Hello");
});
app.use("/api/user", userRoutes);
// app.use("/api/chat", chatRoutes);  // Add chat routes
app.use('/api/chat', chatRoutes);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error.message);
  }
};

start();
