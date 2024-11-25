import express from "express";
import { helloWorld, sendObject } from "./controllers.js";

const router = express.Router();

router.get("/", helloWorld)
router.get("/me", sendObject)

export {router}