import express, {json} from "express";
import "express-async-errors";
import dotenv from "dotenv";
const app = express();
import routes from "@/routers/indexRoutes"

dotenv.config();
app.use(json());
app.use(routes)

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is up and running or port: ${PORT}`)
})