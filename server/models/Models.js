import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

export const Substations = db.define(
  "substations",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export const Dcc = db.define(
  "dcc",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export const Feeders = db.define(
  "feeders",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export const Keypoints = db.define(
  "keypoints",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export const KeypointTypes = db.define(
  "keypointTypes",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    freezeTableName: true,
  }
);

Substations.hasMany(Feeders, {
  foreignKey: { allowNull: false },
});
Feeders.belongsTo(Substations);

Dcc.hasMany(Feeders, {
  foreignKey: { allowNull: false },
});
Feeders.belongsTo(Dcc);

Feeders.hasMany(Keypoints, {
  foreignKey: { allowNull: false },
});
Keypoints.belongsTo(Feeders);

KeypointTypes.hasMany(Keypoints, {
  foreignKey: { allowNull: false },
});
Keypoints.belongsTo(KeypointTypes);

//Sync
(async () => {
  await db.sync();
})();
