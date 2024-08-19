import express from "express";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

const app = express();
const PORT = 7000;

app.use(express.json());
connectDB();

// api end point
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("APi working FoodDel");
});

app.listen(PORT, () => {
  console.log(`App started at ${PORT}`);
});
