import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  //await Product.deleteMany({});
  console.log(data.products);
  const createdProducts = await Product.insertMany(data.products);
  console.log(createdProducts);
  res.send({ createdProducts });

  await Product.deleteMany({});
  const createdUsers = await Product.insertMany(data.users);
  res.send({ createdUsers });
});

export default seedRouter;
