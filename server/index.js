require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
import categoryRoutes from "./routes/category";
import postRoutes from "./routes/post";
import websiteRoutes from "./routes/website";

const morgan = require("morgan");

const app = express();
const http = require("http").createServer(app);

// db connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log("Connection Error: ", err));

// middlewares
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// route middlewares
app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", postRoutes);
app.use("/api", websiteRoutes);

const port = process.env.PORT || 8000;

http.listen(port, () => console.log("Server running on http://localhost:8000"));
