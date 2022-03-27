import axios from "axios";


const getWeather = async(req, res)=>{
    const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const query = `308526?apikey=${process.env.APIKEY}`;
    const options = {
        method: 'GET',
        url: base + query,
    };
    
    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.error(error)
    });
 

};

export { getWeather};