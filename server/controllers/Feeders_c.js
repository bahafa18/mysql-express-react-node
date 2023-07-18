import { Feeders, Feeders_v } from "../models/Feeders_m.js";

export const getFeeders = async (req, res) => {
  try {
    const response = await Feeders.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getFeeders_v = async (req, res) => {
  try {
    const [result, metadata] = await Feeders_v;
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};

export const getFeederById = async (req, res) => {
  try {
    const response = await Feeders.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createFeeder = async (req, res) => {
  try {
    await Feeders.create(req.body);
    res.status(201).json({ msg: "Feeder Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateFeeder = async (req, res) => {
  try {
    await Feeders.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Feeder updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFeeder = async (req, res) => {
  try {
    await Feeders.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Feeder deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
