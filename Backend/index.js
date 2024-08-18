import express from "express";
import cors from "cors";

// app config
const app = express();
const PORT = 300;
// middleware
app.use(express.json());
app.use(cors);

app.get("/", (req, res) => {
  res.send("Api working");
});

app.listen(PORT, () => {
  console.log(`Server started  at ${PORT}`);
});
