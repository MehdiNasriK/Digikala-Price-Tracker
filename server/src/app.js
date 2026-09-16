import express from "express"
import router from "./module/router.js"
import globalErrorHandler from "./shared/error/error.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1", router)


app.use(globalErrorHandler)

app.listen(3000, ()=> {
    console.log("Hey Im listening...")
})