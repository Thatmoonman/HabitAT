import express from "express";
import cors from "cors";
import habits from "./routes/habits.js";

const PORT = process.env.PORT || 5050;
console.log(PORT)
const app = express();

app.use(cors());
app.use(express.json());
app.use("/habits", habits);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});