import repo from "./repository.js";
import { AppError } from "../shared/error/erroeApp.js";
import catchAsync from "../shared/catchAsync.js";

const getProducts = async (searchInput, next) => {
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

      data.push(dataObject);
    }
  }

  return data;
};

const addTOMyList = async (productObj, next) => {
  const product = await repo.getProduct(productObj.DG_id);
  if (product)
    throw new AppError("this product already exist in your list", 409);

  return repo.saveProductInList(productObj, next);
};

const getMyList = (next) => {
  return repo.findProducts(next);
};

const refreshMyList = catchAsync(async () => {
  const products = await repo.findProducts();
  if (products.length === 0) throw new AppError("your list is empty", 404);

  const ids = products.map((product) => product.DG_id);

  const data = [];
  for (const id of ids) {
    const response = await fetch(`https://api.digikala.com/v2/product/${id}/`);
    const responseData = await response.json();

    const DG_id = responseData.data.product.id;
    const name = responseData.data.product.title_fa;
    const price = responseData.data.product.default_variant.price.rrp_price;
    const price_D =
      responseData.data.product.default_variant.price.selling_price;

    const dataObject = {
      DG_id,
      name,
      price,
      price_D,
    };

    data.push(dataObject);
  }

  return repo.updateProducts(data);
});

export default {
  getProducts,
  addTOMyList,
  getMyList,
  refreshMyList,
};
