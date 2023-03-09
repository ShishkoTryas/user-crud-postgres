import express from "express"
import bodyParser from "body-parser"
import { router } from "./routes/userRoutes.js"
import { Sport } from "./config/env.js"


const app = express();

app.use(bodyParser.json());
app.use('/api', router);

app.listen(Sport, () => {
    console.log(`----------- Server Started on port ${Sport} -----------`)
})