import express from "express";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";

const app = express();
const PORT = 7000;
app.use(cors());

app.use(express.json());
connectDB();

// api end point
app.use("/api/food", foodRouter);

app.use("/images", express.static("uploads"));

app.use("/api/user", userRouter);

app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("APi working FoodDel");
});

app.listen(PORT, () => {
  console.log(`App started at ${PORT}`);
});
