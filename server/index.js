import express from "express";
import cors from "cors";
import SubstationsRoute from "./routes/Substation_r.js";
import DccRoute from "./routes/Dcc_r.js";
import FeedersRoute from "./routes/Feeders_r.js";
import KeypointsRoute from "./routes/Keypoints_r.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(SubstationsRoute);
app.use(DccRoute);
app.use(FeedersRoute);
app.use(KeypointsRoute);

app.listen(3100, () => {
  console.log("server up an running at port 3100...");
});
