import express from "express";
import { connectDB } from "./config/db.js";
import { userRouter } from "./routes/userRoutes.js";

const app = express();
const PORT = 3001;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port number ${PORT}`);
});
