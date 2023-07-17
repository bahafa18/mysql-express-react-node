import express from "express";
import cors from "cors";
import SubstationsRoute from "./routes/Substation_r.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(SubstationsRoute);

app.listen(3100, () => {
  console.log("server up an running...");
});
