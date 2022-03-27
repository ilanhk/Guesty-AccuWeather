import express from 'express';
import { getWeather } from "../controller/weatherController.js";


const router = express.Router();


router.route('/').get(getWeather);


export default router;