import prisma from "../shared/prisma.js";
import { AppError } from "../shared/error/erroeApp.js";

const saveProductInList = async (data) => {
  try {
    const product = await prisma.product.create({
      data,
    });

    if (!product) throw new AppError("something went wrong", 500);

    return product;
  } catch (err) {
    throw err;
  }
};

const getProduct = async (DG_id) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        DG_id,
      },
    });

    return product;
  } catch (err) {
    throw err;
  }
};

const findProducts = async () => {
  try {
    const products = await prisma.product.findMany();

    return products;
  } catch (err) {
    throw err
  }
};

const updateProducts = async (data) => {
  try {
    const products = [];

    for (let i = 0; i < data.length; i++) {
      const product = await prisma.product.update({
        where: {
          DG_id: data[i].DG_id,
        },
        data: data[i],
      });

      products.push(product);
    }

    return products;
  } catch (err) {
    throw err;
  }
};

const deleteProduct = async (DG_id) => {
  try {
    await prisma.product.delete({
      where: {
        DG_id,
      },
    });

    return true;
  } catch (err) {
    throw err;
  }
};

export default {
  saveProductInList,
  findProducts,
  getProduct,
  updateProducts,
  deleteProduct,
};
