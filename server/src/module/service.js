import repo from "./repository.js";
import { AppError } from "../shared/error/erroeApp.js";
import sleep from "../shared/sleep.js";

const getProducts = async (searchInput) => {
  try {
    const response = await fetch(
      `https://api.digikala.com/discovery/api/v2/search?q=${searchInput}`,
    );
    const responseData = await response.json();
    const mainArray = responseData.data.widgets[0].data.widgets;

    const data = [];

    for (let i = 0; i < mainArray.length; i++) {
      if (!mainArray[i].data.action_type && !mainArray[i].data.ads_id) {
        const dataObject = {};
        dataObject.name = mainArray[i].data.title_fa;
        dataObject.DG_id = mainArray[i].data.id;
        dataObject.price = mainArray[i].data.default_variant.price.rrp_price;
        dataObject.price_D =
          mainArray[i].data.default_variant.price.selling_price;
        dataObject.image = mainArray[i].data.images.main.url[0];
        dataObject.inStock = mainArray[i].data.status === "marketable";

        data.push(dataObject);
      }
    }

    return data;
  } catch (err) {
    throw err;
  }
};

const addTOMyList = async (productObj) => {
  try {
    const product = await repo.getProduct(productObj.DG_id);
    if (product)
      throw new AppError("this product already exist in your list", 409);

    return repo.saveProductInList(productObj);
  } catch (err) {
    throw err;
  }
};

const getMyList = async () => {
  try {
    const products = await repo.findProducts();

    for (const product of products) {
      product.price = product.price.toString()
      product.price_D = product.price_D.toString()
    }

    return products
  } catch (err) {
    throw err;
  }
};

const refreshMyList = async () => {
  try {
    const products = await repo.findProducts();
    if (products.length === 0) throw new AppError("your list is empty", 404);

    const ids = products.map((product) => product.DG_id);

    const data = [];
    const start = Date.now()
    for (const id of ids) {
      await sleep(600);

      const response = await fetch(
        `https://api.digikala.com/v2/product/${id}/`,
      );
      const responseData = await response.json();

      const DG_id = responseData.data.product.id;
      const name = responseData.data.product.title_fa;
      const price = responseData.data.product.default_variant.price?.rrp_price || 0;
      const price_D =
        responseData.data.product.default_variant.price?.selling_price || 0;
      const inStock = responseData.data.product.status === "marketable";
      const image = responseData.data.product.images.main.url[0];

      const dataObject = {
        DG_id,
        name,
        price,
        price_D,
        inStock,
        image,
      };

      data.push(dataObject);
    }
    const end = Date.now()
    console.log(Math.trunc((end-start) / 1000))

    const newProducts = await repo.updateProducts(data);

    for (const product of newProducts) {
      product.price = product.price.toString()
      product.price_D = product.price_D.toString()
    }

    return newProducts
  } catch (err) {
    throw err;
  }
};

const deleteFromMyList = (DG_id) => {
  try {
    return repo.deleteProduct(DG_id);
  } catch (err) {
    throw err;
  }
};

export default {
  getProducts,
  addTOMyList,
  getMyList,
  refreshMyList,
  deleteFromMyList,
};
