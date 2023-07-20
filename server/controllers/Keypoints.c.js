import { Dcc, Feeders, Keypoints, Substations } from "../models/Models.js";

export const getKeypoints = async (req, res) => {
  try {
    const response = await Keypoints.findAll({
      include: [
        {
          model: Feeders,
          include: [
            {
              model: Dcc,
            },
            {
              model: Substations,
            },
          ],
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getKeypointById = async (req, res) => {
  try {
    const response = await Keypoints.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createKeypoint = async (req, res) => {
  try {
    await Keypoints.create(req.body);
    res.status(201).json({ msg: "Keypoint Created" });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateKeypoint = async (req, res) => {
  try {
    await Keypoints.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Keypoint updated" });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteKeypoint = async (req, res) => {
  try {
    await Keypoints.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Keypoint deleted" });
  } catch (error) {
    res.status(400).json(error);
  }
};
