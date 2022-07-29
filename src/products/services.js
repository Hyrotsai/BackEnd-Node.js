const { ObjectId } = require("mongodb");

const { Database } = require("../database/index");
const { ProductsUtils } = require("./utils");

const COLLECTION = "products";

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

const updateProduct = async (id, body) => {
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

const deleteProduct = async (id) => {
  const collection = await Database(COLLECTION);
  await collection.deleteOne({ _id: ObjectId(id) });
};

const generateReport = async (name, res) => {
  try {
    let products = await getAll();
    console.log(name);
    ProductsUtils.excelGenerator(products, name, res);
  } catch (error) {}
};

module.exports.ProductsService = {
  getAll,
  getById,
  create,
  generateReport,
  updateProduct,
  deleteProduct,
};
