import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

export const Feeders = db.define(
  "feeders",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_substation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_dcc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export const Feeders_v = db.query(
  "SELECT a.*, b.name as substation, c.name as dcc FROM feeders a LEFT JOIN substations b ON b.id = a.id_substation LEFT JOIN dcc c ON c.id = a.id_dcc"
);

// export default Feeders;

(async () => {
  await db.sync();
})();
