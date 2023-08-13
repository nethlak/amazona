import express from 'express';
import Product from '../models/productModel.js';
//import data from '../data.js';

const seedRouter = express.Router();

seedRouter.post('/', async (req, res) => {
  const dataToInsert = [
    {
      //_id: '1',
      name: 'Nike-slim-shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: 'images/p1.jpg',
      price: 120,
      countInStock: 120,
      brand: 'Nike',
      rating: 2,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '2',
      name: 'Addidas-fit-shirt',
      slug: 'addidas-fit-shirt',
      category: 'Shirts',
      image: 'images/p2.jpg',
      price: 220,
      countInStock: 10,
      brand: 'Addidas',
      rating: 6,
      numReviews: 15,
      description: 'high quality shirt',
    },
    {
      //_id: '3',
      name: 'Nike-slim-pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: 'images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality pant',
    },
    {
      //_id: '4',
      name: 'Addidas-slim-pant',
      slug: 'addidas-slim-pant',
      category: 'Pants',
      image: 'images/p4.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Addidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality pant',
    },
  ];
  await Product.deleteMany({});
  //console.log(data.products);
  const createdProducts = await Product.insertMany(dataToInsert);
  //console.log(createdProducts);
  console.log(`${createdProducts.insertedCount} documents inserted.`);
  res.send({ createdProducts });

  await Product.deleteMany({});
  const createdUsers = await Product.insertMany(data.users);
  res.send({ createdUsers });
});

export default seedRouter;
