const ProductModel = require("../models/products.model");

const postProduct = async (req, res) => {
  await ProductModel.create(
    {
      name: "Manzana",
    },
    {
      fields: ["name"],
    }
  );
  res.json("Creado");
};
const getProducts = async (req, res) => {
  const products = await ProductModel.findAll();
  res.json(products);
};
const getProductById = (req, res) => {};

const patchProductById = (req, res) => {};

const deleteProductById = (req, res) => {};

module.exports = {
  postProduct,
  getProducts,
  getProductById,
  patchProductById,
  deleteProductById,
};
