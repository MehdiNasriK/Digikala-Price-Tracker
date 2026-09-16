import prisma from "../shared/prisma.js"
import { AppError } from "../shared/error/erroeApp.js"
import catchAsync from "../shared/catchAsync.js"

const saveProductInList = async (data) => {
    try { 
        const product = await prisma.product.create({
        data,
    })

    if (!product) throw new AppError("something went wrong", 500)

    return product
}catch (err) {
    console.log(err)
}
}

const getProduct = async (DG_id) => {
    const product = await prisma.product.findUnique({
        where: {
            DG_id,
        }
    })

    return product
}

const findProducts = async () => {
    const products = await prisma.product.findMany()

    if (!products) next(new AppError("there is no product", 404))

    return products
}

const updateProducts = async(data) => {
    const products = []

    for (let i=0; i < data.length; i++) {
        const product = await prisma.product.update({
            where: {
              DG_id: data[i].DG_id  
            },
            data: data[i],
        })

        products.push(product)
    }

    return products
}

const deleteProduct = async(DG_id) => {
    try {
        await prisma.product.delete({
        where: {
            DG_id,
        }
    })

    return true
}catch (err) {
    console.log(err)
}
}

export default {
    saveProductInList,
    findProducts,
    getProduct,
    updateProducts,
    deleteProduct,
}