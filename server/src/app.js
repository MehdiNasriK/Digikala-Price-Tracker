import express from "express"
import router from "./module/router.js"
import globalErrorHandler from "./shared/error/error.js"
import path from "path"
import { fileURLToPath } from "url"

const app = express()

const __filname = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filname)


app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

app.use("/api/v1", router)


app.use(globalErrorHandler)

app.listen(3000, ()=> {
    console.log("Hey Im listening...")
})