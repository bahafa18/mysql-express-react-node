// import { Feeders, Feeders_v } from "../models/Feeders_m.js";
import { Substations, Dcc, Feeders } from "../models/Models.js";

export const getFeeders = async (req, res) => {
  try {
    const response = await Feeders.findAll({ include: [Substations, Dcc] });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
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
    res.status(400).json(error);
  }
};

export const getFeederByGi = async (req, res) => {
  try {
    const response = await Feeders.findAll({
      where: {
        substationId: req.params.gi,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createFeeder = async (req, res) => {
  try {
    await Feeders.create(req.body);
    res.status(201).json({ msg: "Feeder Created" });
  } catch (error) {
    res.status(400).json(error);
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
    res.status(400).json(error);
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
    res.status(400).json(error);
  }
};
