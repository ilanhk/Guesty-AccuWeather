
import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';
import weatherRoute from './routes/weatherRoute.js';

const app = express();

dotenv.config();

app.use(cors());


app.get('/', (req, res)=>{
    res.send('Api is running...')
});

// app.use(express.json()) //express.json will allow us to accept JSON data in the body


app.use('/weather', weatherRoute);

// app.get('/weather', (req,res) => {
//     const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
//     const query = `308526?apikey=${process.env.APIKEY}`;
//     const options = {
//         method: 'GET',
//         url: base + query,
//     };
    
//     axios.request(options).then((response) => {
//         res.json(response.data)

//     }).catch((error) => {
//         console.error(error)
//     });

// });



app.listen(5000, console.log('Server running on PORT 5000'));