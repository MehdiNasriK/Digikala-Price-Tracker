import { Router } from "express";
import controller from "./controller.js"

const router = Router()

router.route("/search").post(controller.searchItem)
router.route("/add").post(controller.addTOMyList)
router.route("/mylist").get(controller.getMyList)
router.route("/refresh").get(controller.refreshMyList)
router.route("/delete/:id").delete(controller.deleteFromMyList)

export default router