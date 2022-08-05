import { Model, Sequelize } from "sequelize";
import fs from "fs";
import path from "path";
import config from "../config";
import generalLogger from "../core/Logger";

interface DB {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  models: Models;
}

type ModelType = Model & { associate: (models: Models) => any } & Function;

interface Models {
  [key: string]: ModelType;
}

const basename = path.basename(__filename);

const models: Models = {} as Models;

const db: DB = {} as DB;

const modelsDir = path.resolve(__dirname, "models");

const initializeModel = async (
  sequelize: Sequelize,
  file: string
): Promise<ModelType> => {
  const model = (await import(path.resolve(modelsDir, file))).init(sequelize);
  return model;
};

export const createConnection = async () => {
  const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
      host: config.db.host,
      dialect: "postgres",
    }
  );

  const files = await fs.promises.readdir(modelsDir);

  const filteredFiles = files.filter((file) => {
    const ext = file.slice(-3);
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      (ext === ".js" || ext === ".ts")
    );
  });

  (
    await Promise.all(
      filteredFiles.map((file) => initializeModel(sequelize, file))
    )
  ).forEach((model) => {
    models[model.name] = model;
  });

  db.models = models;

  Object.keys(db.models).forEach((modelName) => {
    if (Boolean(db.models[modelName].associate)) {
      db.models[modelName].associate(db.models);
    }
  })

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  await sequelize.authenticate();

  generalLogger.info("DB Connected");

  return db;
};
