const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName) => {
  try {
    const collectionName = models[modelName].collection.name;
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray();

    if (modelExists.length) {
      await models[modelName].collection.drop();
      console.log(`${modelName} collection dropped`);
    }
  } catch (err) {
    console.error(`Error dropping ${modelName} collection: `, err);
    throw err;
  }
};
