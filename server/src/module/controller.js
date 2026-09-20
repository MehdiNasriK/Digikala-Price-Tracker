import { AppError } from "../shared/error/erroeApp.js";
import services from "./service.js";
import catchAsync from "../shared/catchAsync.js";

const searchItem = catchAsync(async (req, res, next) => {
  if (!req.body) return next(new AppError("please enter some text", 400));
  const { searchInput } = req.body;

  if (!searchInput) return next(new AppError("please enter some text!", 400));

  const products = await services.getProducts(searchInput);

  res.status(200).json({
    products,
  });
});

const addTOMyList = catchAsync(async (req, res, next) => {
  const { DG_id, name, DGprice, DGprice_D, image } = req.body;
  const productObj = {
    DG_id,
    name,
    price: BigInt(DGprice),
    price_D: BigInt(DGprice_D),
    image,
  };

  await services.addTOMyList(productObj);
  res.status(200).json({
    message: "save in list successfully",
  });
});

const getMyList = catchAsync(async (req, res, next) => {
  const products = await services.getMyList();

  res.status(200).json({
    products,
  });
});

const refreshMyList = catchAsync(async (req, res, next) => {
  const products = await services.refreshMyList();

  res.status(200).json({
    products,
  });
});

const deleteFromMyList = catchAsync(async (req, res, next) => {
  const DG_id = req.params.id;

  const result = await services.deleteFromMyList(Number(DG_id));
  if (result !== true)
    return next(new AppError("something went wrong...", 500));

  res.status(200).json({
    status: "success",
  });
});

export default {
  searchItem,
  addTOMyList,
  getMyList,
  refreshMyList,
  deleteFromMyList,
};
