import Substations from "../models/Substations_m.js";

export const getSubstations = async (req, res) => {
  try {
    const response = await Substations.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSubstationById = async (req, res) => {
  try {
    const response = await Substations.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createSubstation = async (req, res) => {
  try {
    await Substations.create(req.body);
    res.status(201).json({ msg: "Substation Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSubstation = async (req, res) => {
  try {
    await Substations.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Substation updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSubstation = async (req, res) => {
  try {
    await Substations.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Substation deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
