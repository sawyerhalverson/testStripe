// server/src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
