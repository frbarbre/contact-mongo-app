import cors from "cors";
import express from "express";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "database.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

connectDB();

// Routes
app.use("/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
