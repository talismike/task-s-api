import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mainRouter from "@/main.router";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
