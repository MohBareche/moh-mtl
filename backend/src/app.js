import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import { router } from "../src/config/routes";

const app = express();
const PORT = process.env.PORT || 8080;

// Connection to database
const dbUrl = "mongodb+srv://moh:qcNiE4Bgmzw9tGn@node-rest-shop-nwkuv.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.once("open", () =>
  console.log("Connecté à la base de données...")
);
mongoose.connection.on("error", err =>
  console.error("Erreur de connection à la base de données!", err)
);

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", router);

// Start Server
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
