import dotenv from "dotenv"
dotenv.config()
import { app } from "./app.js"
import { router } from "./routes.js"

app.use("/",router)

app.listen(process.env.PORT, () => {
    console.log("Server started!");
})