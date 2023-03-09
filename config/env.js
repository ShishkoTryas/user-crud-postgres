import config from "dotenv"

config.config()
export const user = process.env.USER;
export const host = process.env.HOST;
export const database = process.env.DATABASE;
export const password = process.env.PASSWORD;
export const port = process.env.PORT;
export const Sport = process.env.SPORT;
