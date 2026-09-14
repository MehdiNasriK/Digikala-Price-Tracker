import { AppError } from "../shared/error/erroeApp.js";
import services from "./service.js"
import catchAsync from "../shared/catchAsync.js";

const searchItem = catchAsync(async (req, res, next) => {
  const  {searchInput}  = req.body;

  if (!searchInput) return next(new AppError("please enter some text!", 400));

  const products = await services.getProducts(searchInput, next)

  res.status(200).json({
    len: products.length,
    products,
  })
});

const addTOMyList = catchAsync(async (req, res, next) => {
  const {DG_id, name, price, price_D} = req.body
  const productObj = {DG_id, name, price, price_D}
  

  const product = await services.addTOMyList(productObj, next)

  res.status(200).json({
    message: "save in list successfully",
    product,
  })
})

const getMyList = catchAsync(async (req, res, next) => {
  const products = await services.getMyList(next)

  res.status(200).json({
    products,
  })
})

const refreshMyList = catchAsync(async (req, res, next) => {
  const products = await services.refreshMyList()

  res.status(200).json({
    products,
  })
})


export default {
  searchItem,
  addTOMyList,
  getMyList,
  refreshMyList,
}