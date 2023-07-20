// import Dcc from "../models/Dcc_m.js";
import { Dcc } from "../models/Models.js";

export const getDcc = async (req, res) => {
  try {
    const response = await Dcc.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
