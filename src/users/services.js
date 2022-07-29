const { ObjectId } = require("mongodb");

const { Database } = require("../database/index");

const COLLECTION = "users";

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return await collection.findOne({ _id: ObjectId(id) });
};

const create = async (product) => {
  const collection = await Database(COLLECTION);
  let result = await collection.insertOne(product);
  return result.insertedId;
};

const updateUser = async (id, body) => {
  const collection = await Database(COLLECTION);
  await collection.updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        ...body,
      },
    }
  );
};

const deleteUser = async (id) => {
  const collection = await Database(COLLECTION);
  await collection.deleteOne({ _id: ObjectId(id) });
};

module.exports.UsersService = {
  getAll,
  getById,
  create,
  updateUser,
  deleteUser,
};
